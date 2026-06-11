const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { Pool } = require("pg");

loadEnvFile(path.join(__dirname, ".env"));

const PORT = Number(process.env.PORT || 5174);
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost:5432/studiesql";
const SESSION_COOKIE = "studiesql_session";
const OAUTH_STATE_COOKIE = "studiesql_github_state";
const SESSION_DAYS = 14;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL || `http://127.0.0.1:${PORT}`;
const GITHUB_CALLBACK_PATH = "/api/auth/github/callback";

const pool = new Pool({ connectionString: DATABASE_URL });
const publicDir = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
};

const server = http.createServer(async (req, res) => {
  try {
    if (req.url.startsWith("/api/")) {
      await handleApi(req, res);
      return;
    }
    await serveStatic(req, res);
  } catch (error) {
    console.error(error);
    sendJson(res, error.status || 500, { error: error.status ? error.message : "서버 오류가 발생했습니다." });
  }
});

server.listen(PORT, () => {
  console.log(`StudieSQL server: http://127.0.0.1:${PORT}`);
});

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (!key || process.env[key] !== undefined) continue;
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

async function handleApi(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && req.url === "/api/auth/me") {
    const user = await getUserFromRequest(req);
    sendJson(res, 200, { user });
    return;
  }

  if (req.method === "POST" && req.url === "/api/auth/register") {
    const body = await readJson(req);
    const email = normalizeEmail(body.email);
    const displayName = String(body.displayName || "").trim();
    const password = String(body.password || "");

    if (!isValidEmail(email)) return sendJson(res, 400, { error: "이메일 형식을 확인해 주세요." });
    if (displayName.length < 2) return sendJson(res, 400, { error: "이름은 2자 이상 입력해 주세요." });
    if (password.length < 8) return sendJson(res, 400, { error: "비밀번호는 8자 이상이어야 합니다." });

    const { salt, hash } = hashPassword(password);
    try {
      const result = await pool.query(
        "INSERT INTO users (email, display_name, password_hash, password_salt) VALUES ($1, $2, $3, $4) RETURNING id, email, display_name, github_username, github_avatar_url, github_profile_url",
        [email, displayName, hash, salt],
      );
      const user = toPublicUser(result.rows[0]);
      await createSession(res, user.id);
      sendJson(res, 201, { user });
    } catch (error) {
      if (error.code === "23505") return sendJson(res, 409, { error: "이미 가입된 이메일입니다." });
      throw error;
    }
    return;
  }

  if (req.method === "POST" && req.url === "/api/auth/login") {
    const body = await readJson(req);
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const result = await pool.query("SELECT id, email, display_name, password_hash, password_salt, github_username, github_avatar_url, github_profile_url FROM users WHERE email = $1", [email]);
    const user = result.rows[0];
    if (!user || !user.password_hash || !verifyPassword(password, user.password_salt, user.password_hash)) {
      return sendJson(res, 401, { error: "이메일 또는 비밀번호가 맞지 않습니다." });
    }
    await createSession(res, user.id);
    sendJson(res, 200, { user: toPublicUser(user) });
    return;
  }

  if (req.method === "POST" && req.url === "/api/auth/logout") {
    const token = getCookie(req, SESSION_COOKIE);
    if (token) await pool.query("DELETE FROM sessions WHERE token_hash = $1", [hashToken(token)]);
    clearSessionCookie(res);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === "GET" && req.url === "/api/auth/github") {
    if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
      return sendJson(res, 501, { error: "GitHub OAuth 환경변수 GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET이 필요합니다." });
    }
    const state = crypto.randomBytes(24).toString("hex");
    const redirectUri = `${PUBLIC_BASE_URL}${GITHUB_CALLBACK_PATH}`;
    setCookie(res, OAUTH_STATE_COOKIE, state, 10 * 60);
    redirect(
      res,
      `https://github.com/login/oauth/authorize?${new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        redirect_uri: redirectUri,
        scope: "read:user user:email",
        state,
      })}`,
    );
    return;
  }

  if (req.method === "GET" && requestUrl.pathname === GITHUB_CALLBACK_PATH) {
    const code = requestUrl.searchParams.get("code");
    const state = requestUrl.searchParams.get("state");
    const cookieState = getCookie(req, OAUTH_STATE_COOKIE);
    clearCookie(res, OAUTH_STATE_COOKIE);

    if (!code || !state || !cookieState || state !== cookieState) {
      redirect(res, "/index.html?auth=github_error#/problems");
      return;
    }

    try {
      const githubToken = await exchangeGithubCode(code);
      const githubUser = await fetchGithubUser(githubToken);
      const emails = await fetchGithubEmails(githubToken);
      const primaryEmail = pickGithubEmail(emails) || githubUser.email || null;
      const user = await upsertGithubUser(githubUser, primaryEmail);
      await createSession(res, user.id);
      redirect(res, "/index.html?auth=github_success#/problems");
    } catch (error) {
      console.error(error);
      redirect(res, "/index.html?auth=github_error#/problems");
    }
    return;
  }

  sendJson(res, 404, { error: "API 경로를 찾을 수 없습니다." });
}

async function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const rawPath = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
  const filePath = path.normalize(path.join(publicDir, rawPath));

  if (!filePath.startsWith(publicDir) || filePath.includes(`${path.sep}.git${path.sep}`)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
}

async function readJson(req) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    const error = new Error("JSON 형식이 올바르지 않습니다.");
    error.status = 400;
    throw error;
  }
}

async function getUserFromRequest(req) {
  const token = getCookie(req, SESSION_COOKIE);
  if (!token) return null;
  const result = await pool.query(
    `SELECT users.id, users.email, users.display_name, users.github_username, users.github_avatar_url, users.github_profile_url
     FROM sessions
     JOIN users ON users.id = sessions.user_id
     WHERE sessions.token_hash = $1 AND sessions.expires_at > now()`,
    [hashToken(token)],
  );
  return result.rows[0] ? toPublicUser(result.rows[0]) : null;
}

async function exchangeGithubCode(code) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${PUBLIC_BASE_URL}${GITHUB_CALLBACK_PATH}`,
    }),
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) throw new Error(data.error_description || "GitHub access token 발급 실패");
  return data.access_token;
}

async function fetchGithubUser(accessToken) {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": "StudieSQL",
    },
  });
  if (!response.ok) throw new Error("GitHub 사용자 정보를 가져오지 못했습니다.");
  return response.json();
}

async function fetchGithubEmails(accessToken) {
  const response = await fetch("https://api.github.com/user/emails", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${accessToken}`,
      "User-Agent": "StudieSQL",
    },
  });
  if (!response.ok) return [];
  return response.json();
}

function pickGithubEmail(emails) {
  const primary = emails.find((email) => email.primary && email.verified);
  const verified = emails.find((email) => email.verified);
  return primary?.email || verified?.email || "";
}

async function upsertGithubUser(githubUser, email) {
  const githubId = String(githubUser.id);
  const displayName = githubUser.name || githubUser.login;
  const result = await pool.query(
    `INSERT INTO users (email, display_name, github_id, github_username, github_avatar_url, github_profile_url)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (github_id)
     DO UPDATE SET
       email = COALESCE(EXCLUDED.email, users.email),
       display_name = EXCLUDED.display_name,
       github_username = EXCLUDED.github_username,
       github_avatar_url = EXCLUDED.github_avatar_url,
       github_profile_url = EXCLUDED.github_profile_url,
       updated_at = now()
     RETURNING id, email, display_name, github_username, github_avatar_url, github_profile_url`,
    [email || null, displayName, githubId, githubUser.login, githubUser.avatar_url, githubUser.html_url],
  );
  return toPublicUser(result.rows[0]);
}

async function createSession(res, userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await pool.query("INSERT INTO sessions (user_id, token_hash, expires_at) VALUES ($1, $2, $3)", [userId, hashToken(token), expiresAt]);
  setCookie(res, SESSION_COOKIE, token, SESSION_DAYS * 24 * 60 * 60);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return { salt, hash };
}

function verifyPassword(password, salt, expectedHash) {
  const { hash } = hashPassword(password, salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(expectedHash, "hex"));
}

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toPublicUser(row) {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    githubUsername: row.github_username,
    githubAvatarUrl: row.github_avatar_url,
    githubProfileUrl: row.github_profile_url,
  };
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function getCookie(req, name) {
  const cookies = String(req.headers.cookie || "").split(";").map((cookie) => cookie.trim());
  const prefix = `${name}=`;
  const match = cookies.find((cookie) => cookie.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : "";
}

function setCookie(res, name, value, maxAge) {
  appendCookie(res, `${name}=${encodeURIComponent(value)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`);
}

function clearSessionCookie(res) {
  clearCookie(res, SESSION_COOKIE);
}

function clearCookie(res, name) {
  appendCookie(res, `${name}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

function appendCookie(res, cookie) {
  const existing = res.getHeader("Set-Cookie");
  if (!existing) {
    res.setHeader("Set-Cookie", cookie);
    return;
  }
  res.setHeader("Set-Cookie", Array.isArray(existing) ? [...existing, cookie] : [existing, cookie]);
}

function redirect(res, location) {
  res.writeHead(302, { Location: location });
  res.end();
}
