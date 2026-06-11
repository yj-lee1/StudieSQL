# StudieSQL

한국어로 플레이할 수 있는 SQL 추론 게임입니다. 단계별 사건 파일을 열고, 데이터 지도와 직접 작성한 SQL로 증거를 좁혀 최종 보고서를 제출합니다.

## 플레이 방법

1. 상단의 사건 파일 보드에서 단계를 고릅니다.
2. 선택한 사건의 독립 풀이 화면으로 이동합니다.
3. 데이터 지도 열기로 ERD와 테이블 열, 샘플 행을 확인합니다.
4. 조사 콘솔에 직접 SQL을 작성하고 실행합니다.
5. 결과표에서 단서를 찾으면 증거 노트가 채워집니다.
6. 충분히 추론했으면 최종 보고서에 이름이나 id를 제출합니다.

## SQL 실행 방식

이 앱은 PostgreSQL이나 MySQL 서버에 연결하지 않습니다. `vendor/sql-wasm.js`와 `vendor/sql-wasm.wasm`에 포함된 브라우저 내장 SQLite 엔진으로 실행됩니다.

읽기 전용 실습 DB이므로 `SELECT`, `WITH`, `PRAGMA` 조회를 사용할 수 있습니다. SQLite가 지원하는 조인, 집계, 정렬, 서브쿼리, `GROUP BY`, `HAVING` 등을 자유롭게 작성할 수 있습니다.

## 로컬 서비스 실행

로그인 기능은 PostgreSQL과 Node 서버를 사용합니다.

```bash
createdb studiesql
cp .env.example .env
npm run db:migrate
npm start
```

서버는 기본적으로 `http://127.0.0.1:5174`에서 실행됩니다.

## GitHub 로그인 설정

GitHub 로그인은 GitHub OAuth App 설정값이 필요합니다.

1. GitHub에서 Settings > Developer settings > OAuth Apps > New OAuth App으로 이동합니다.
2. Application name: `StudieSQL`
3. Homepage URL: `http://127.0.0.1:5174`
4. Authorization callback URL: `http://127.0.0.1:5174/api/auth/github/callback`
5. 발급된 Client ID와 Client Secret을 `.env`에 넣어 실행합니다.

```env
DATABASE_URL=postgres://localhost:5432/studiesql
PUBLIC_BASE_URL=http://127.0.0.1:5174
GITHUB_CLIENT_ID=발급받은_CLIENT_ID
GITHUB_CLIENT_SECRET=발급받은_CLIENT_SECRET
```

`.env`는 Git에 올리지 않습니다. 예시 형식만 `.env.example`에 보관합니다.

배포 환경에서는 Homepage URL과 Authorization callback URL을 실제 서비스 도메인으로 바꿔야 합니다.

## 단계

- 1단계 미술관 살인사건: 경찰 사건 파일에서 실행범과 배후를 찾습니다.
- 2단계 침입 로그 추적: 보안 로그에서 침입자와 의뢰자를 찾습니다.
- 3단계 보급망 이상 징후: 보급망 기록에서 내부 협력자와 외부 의뢰자를 찾습니다.

## 기능

- 빈 콘솔 시작: 정답성 예시 쿼리를 미리 보여주지 않습니다.
- 문제 보드: 단계, 난이도, 개념, 진행 상태를 한눈에 봅니다.
- 화면 라우팅: 문제 목록과 사건 풀이 화면을 분리하고 URL 해시로 이동합니다.
- 운영 지표: 완료 문제, 무힌트 완료, 총 쿼리, 제출 횟수를 로컬에 저장합니다.
- 문제 필터: 난이도와 SQL 개념으로 문제를 좁혀 봅니다.
- SVG ERD: 테이블 사이 관계선을 시각적으로 확인합니다.
- 테이블 인스펙터: ERD 테이블을 클릭해 열과 샘플 행을 확인합니다.
- 증거 노트: 쿼리 결과에 나온 단서를 기준으로 진행도를 갱신합니다.
- 클릭형 튜토리얼: 처음 사용하는 사용자를 화면 흐름으로 안내합니다.

## DB 운영 메모

문제 풀이용 데이터는 `app.js` 안의 객체로 관리하고, 페이지가 열릴 때 브라우저 안에서 SQLite DB를 자동 생성합니다. 사용자 계정과 세션은 PostgreSQL의 `users`, `sessions` 테이블에 저장합니다.

소셜 로그인은 GitHub OAuth만 지원합니다. GitHub 계정으로 가입하면 username, avatar URL, profile URL을 함께 저장해 나중에 공개 프로필/랭킹에서 연결할 수 있습니다.

이 프로젝트는 원작 SQL Murder Mystery의 텍스트와 사건을 복제하지 않고, 같은 학습 감각을 목표로 만든 독립 한국어 사건입니다.
즐겜(공..)
