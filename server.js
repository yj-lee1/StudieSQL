const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { Pool } = require("pg");

const PORT = Number(process.env.PORT || 5174);
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost:5432/studiesql";
const SESSION_COOKIE = "studiesql_session";
const SESSION_DAYS = 14;

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

async function handleApi(req, res) {
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
        "INSERT INTO users (email, display_name, password_hash, password_salt) VALUES ($1, $2, $3, $4) RETURNING id, email, display_name",
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
    const result = await pool.query("SELECT id, email, display_name, password_hash, password_salt FROM users WHERE email = $1", [email]);
    const user = result.rows[0];
    if (!user || !verifyPassword(password, user.password_salt, user.password_hash)) {
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
    `SELECT users.id, users.email, users.display_name
     FROM sessions
     JOIN users ON users.id = sessions.user_id
     WHERE sessions.token_hash = $1 AND sessions.expires_at > now()`,
    [hashToken(token)],
  );
  return result.rows[0] ? toPublicUser(result.rows[0]) : null;
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
  res.setHeader("Set-Cookie", `${name}=${encodeURIComponent(value)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`);
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}
