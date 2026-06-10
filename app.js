const db = {
  crime_scene_report: [
    {
      id: 1,
      date: "2026-05-18",
      type: "살인",
      city: "서울",
      location: "한빛 미술관 지하 보존실",
      description:
        "피해자 박소연 큐레이터가 폐관 뒤 숨진 채 발견됐다. 현장 기록에는 목격자 둘이 적혀 있다. 첫 번째 목격자는 은행나무길의 가장 높은 번지에 산다. 두 번째 목격자는 이름이 '서준'으로 시작하며 같은 날 미술관 근처 카페 영수증을 제출했다.",
    },
    {
      id: 2,
      date: "2026-05-18",
      type: "절도",
      city: "부산",
      location: "해운대 갤러리",
      description: "야간 전시실에서 소형 조각품이 사라졌다.",
    },
    {
      id: 3,
      date: "2026-05-16",
      type: "살인",
      city: "대전",
      location: "둔산동 연구소",
      description: "연구원이 실험동에서 사망했다. 한빛 미술관 사건과 관련 없음.",
    },
  ],
  person: [
    { id: 101, name: "김하늘", address_street: "은행나무길", address_number: 88, occupation: "플로리스트", height_cm: 164, hair_color: "갈색" },
    { id: 102, name: "오민재", address_street: "은행나무길", address_number: 42, occupation: "택배기사", height_cm: 172, hair_color: "검정" },
    { id: 103, name: "강다은", address_street: "은행나무길", address_number: 19, occupation: "교사", height_cm: 158, hair_color: "검정" },
    { id: 201, name: "서준호", address_street: "성수로", address_number: 17, occupation: "바리스타", height_cm: 176, hair_color: "검정" },
    { id: 202, name: "서준영", address_street: "망원로", address_number: 5, occupation: "사진작가", height_cm: 181, hair_color: "검정" },
    { id: 301, name: "최도윤", address_street: "연무장길", address_number: 73, occupation: "보안 컨설턴트", height_cm: 184, hair_color: "검정" },
    { id: 302, name: "최민석", address_street: "도산대로", address_number: 11, occupation: "요리사", height_cm: 177, hair_color: "검정" },
    { id: 303, name: "박이준", address_street: "을지로", address_number: 64, occupation: "무대감독", height_cm: 187, hair_color: "갈색" },
    { id: 304, name: "정세림", address_street: "북촌로", address_number: 34, occupation: "큐레이터", height_cm: 169, hair_color: "검정" },
    { id: 401, name: "윤채원", address_street: "압구정로", address_number: 120, occupation: "아트 딜러", height_cm: 162, hair_color: "검정" },
    { id: 402, name: "한유리", address_street: "이태원로", address_number: 8, occupation: "작곡가", height_cm: 165, hair_color: "갈색" },
    { id: 403, name: "문태경", address_street: "잠실로", address_number: 56, occupation: "투자자", height_cm: 171, hair_color: "회색" },
    { id: 404, name: "임나래", address_street: "서래로", address_number: 21, occupation: "변호사", height_cm: 160, hair_color: "검정" },
    { id: 501, name: "강태오", address_street: "디지털로", address_number: 13, occupation: "프리랜서 보안 분석가", height_cm: 178, hair_color: "검정" },
    { id: 502, name: "유라민", address_street: "테헤란로", address_number: 91, occupation: "클라우드 엔지니어", height_cm: 166, hair_color: "갈색" },
  ],
  receipt: [
    { id: 1, person_id: 201, shop: "달빛카페", date: "2026-05-18", time: "20:41", item: "아메리카노" },
    { id: 2, person_id: 202, shop: "청계문구", date: "2026-05-18", time: "14:10", item: "필름" },
    { id: 3, person_id: 103, shop: "달빛카페", date: "2026-05-17", time: "09:22", item: "라떼" },
  ],
  interview: [
    {
      person_id: 101,
      transcript:
        "저는 밤 8시 15분쯤 미술관 후문에서 검은 후드티 남자를 봤어요. 목에는 한빛 미술관 골드 회원 카드가 있었고, 검은 세단 번호판에 73K가 들어갔습니다.",
    },
    {
      person_id: 201,
      transcript:
        "그 남자는 키가 180cm가 넘고 성이 최 씨라고 들었습니다. 다음 주 루프탑 리허설 VIP 명단에 있다며 통화했어요. 사건 직후 북촌 체육관에 들른 기록도 있을 겁니다.",
    },
    {
      person_id: 301,
      transcript:
        "내가 실행한 건 맞지만 의뢰인이 있었다. 그 사람은 5월 10일 후원자 만찬에서 루비 목걸이를 했고, 5월 19일 잠실 요트클럽에 체크인했다. 사건 전날 계좌에서 1000만 원을 현금으로 뽑았다.",
    },
    {
      person_id: 401,
      transcript:
        "박소연은 내가 숨기려던 위작 계약서를 발견했다. 나는 직접 움직이지 않았다고 생각했지만, 결국 모든 지시가 내 이름으로 남았다.",
    },
  ],
  vehicle: [
    { id: 1, person_id: 301, plate_number: "12서73K8", color: "검정", model: "세단" },
    { id: 2, person_id: 302, plate_number: "44가19Q2", color: "검정", model: "SUV" },
    { id: 3, person_id: 303, plate_number: "90하73K1", color: "흰색", model: "세단" },
    { id: 4, person_id: 401, plate_number: "88로22A7", color: "은색", model: "쿠페" },
  ],
  museum_membership: [
    { id: "G-118", person_id: 301, level: "골드", joined: "2024-03-11" },
    { id: "S-201", person_id: 302, level: "실버", joined: "2025-10-03" },
    { id: "G-214", person_id: 304, level: "골드", joined: "2023-06-28" },
    { id: "P-007", person_id: 401, level: "후원자", joined: "2022-01-14" },
  ],
  gym_checkin: [
    { id: 1, person_id: 301, gym: "북촌 체육관", date: "2026-05-18", time: "21:03" },
    { id: 2, person_id: 302, gym: "북촌 체육관", date: "2026-05-18", time: "18:12" },
    { id: 3, person_id: 303, gym: "성수 러닝랩", date: "2026-05-18", time: "21:10" },
  ],
  event_attendance: [
    { id: 1, person_id: 301, event_name: "루프탑 리허설", date: "2026-05-25", role: "VIP" },
    { id: 2, person_id: 302, event_name: "루프탑 리허설", date: "2026-05-25", role: "스태프" },
    { id: 3, person_id: 401, event_name: "한빛 후원자 만찬", date: "2026-05-10", role: "후원자" },
    { id: 4, person_id: 402, event_name: "한빛 후원자 만찬", date: "2026-05-10", role: "후원자" },
    { id: 5, person_id: 404, event_name: "한빛 후원자 만찬", date: "2026-05-10", role: "후원자" },
  ],
  gala_detail: [
    { person_id: 401, event_name: "한빛 후원자 만찬", accessory: "루비 목걸이", dress_color: "남색" },
    { person_id: 402, event_name: "한빛 후원자 만찬", accessory: "진주 귀걸이", dress_color: "빨강" },
    { person_id: 404, event_name: "한빛 후원자 만찬", accessory: "루비 반지", dress_color: "검정" },
  ],
  marina_checkin: [
    { id: 1, person_id: 401, club: "잠실 요트클럽", date: "2026-05-19", time: "07:35" },
    { id: 2, person_id: 403, club: "잠실 요트클럽", date: "2026-05-19", time: "13:20" },
    { id: 3, person_id: 404, club: "서래 테니스클럽", date: "2026-05-19", time: "08:02" },
  ],
  bank_transaction: [
    { id: 1, person_id: 401, date: "2026-05-17", amount: 10000000, type: "현금인출", memo: "개인 금고" },
    { id: 2, person_id: 402, date: "2026-05-17", amount: 300000, type: "카드결제", memo: "공연 의상" },
    { id: 3, person_id: 404, date: "2026-05-17", amount: 10000000, type: "계좌이체", memo: "소송 비용" },
    { id: 4, person_id: 301, date: "2026-05-18", amount: 9500000, type: "입금", memo: "컨설팅 선금" },
    { id: 5, person_id: 403, date: "2026-06-01", amount: 7000000, type: "계좌이체", memo: "보안 컨설팅" },
    { id: 6, person_id: 501, date: "2026-06-01", amount: 7000000, type: "입금", memo: "외부 프로젝트" },
  ],
  security_alert: [
    {
      id: 1,
      date: "2026-06-02",
      severity: "높음",
      system: "고객 정산 API",
      description:
        "새벽 2시대 관리자 권한으로 대량 export가 실행됐다. 의심 IP는 203.0.113.73이며, 접근 계정은 외부 계약자 권한을 가진 사용자로 보인다.",
    },
    {
      id: 2,
      date: "2026-06-02",
      severity: "중간",
      system: "마케팅 대시보드",
      description: "해외 IP에서 실패한 로그인 4회가 있었다.",
    },
  ],
  user_account: [
    { account_id: 801, person_id: 501, username: "tae.k", role: "contractor", status: "active" },
    { account_id: 802, person_id: 502, username: "ramin.u", role: "engineer", status: "active" },
    { account_id: 803, person_id: 403, username: "tk.moon", role: "investor", status: "disabled" },
  ],
  access_log: [
    { id: 1, account_id: 801, date: "2026-06-02", time: "02:14", source_ip: "203.0.113.73", event: "export", status: "success", endpoint: "/admin/settlement" },
    { id: 2, account_id: 802, date: "2026-06-02", time: "09:21", source_ip: "198.51.100.22", event: "login", status: "success", endpoint: "/dashboard" },
    { id: 3, account_id: 803, date: "2026-06-02", time: "02:10", source_ip: "203.0.113.73", event: "login", status: "failed", endpoint: "/admin" },
  ],
  device_inventory: [
    { id: 1, account_id: 801, device_name: "TAE-LAPTOP-02", trusted: "아니오", last_seen: "2026-06-02" },
    { id: 2, account_id: 802, device_name: "RAMIN-MAC", trusted: "예", last_seen: "2026-06-02" },
    { id: 3, account_id: 803, device_name: "MOON-TABLET", trusted: "아니오", last_seen: "2026-05-20" },
  ],
  vpn_session: [
    { id: 1, account_id: 801, date: "2026-06-02", start_time: "02:01", region: "도쿄", mfa_result: "우회" },
    { id: 2, account_id: 802, date: "2026-06-02", start_time: "09:05", region: "서울", mfa_result: "성공" },
    { id: 3, account_id: 803, date: "2026-06-01", start_time: "23:45", region: "서울", mfa_result: "실패" },
  ],
  code_repository: [
    { id: 1, account_id: 801, repo: "settlement-api", action: "token_read", date: "2026-06-02", time: "02:08" },
    { id: 2, account_id: 802, repo: "billing-web", action: "commit", date: "2026-06-01", time: "16:20" },
    { id: 3, account_id: 803, repo: "investor-report", action: "download", date: "2026-05-29", time: "11:02" },
  ],
  supply_report: [
    {
      id: 1,
      date: "2026-07-11",
      region: "동부 전선",
      severity: "긴급",
      description:
        "3번 보급선에서 의료 키트와 위성 배터리 재고가 동시에 사라졌다. 마지막 정상 스캔은 해람 창고였고, 변조된 운송 요청에는 내부 승인 코드가 사용됐다.",
    },
    {
      id: 2,
      date: "2026-07-10",
      region: "서부 전선",
      severity: "주의",
      description: "연료 보급 지연이 있었지만 재고 차이는 없다.",
    },
  ],
  supply_depot: [
    { depot_id: 901, name: "해람 창고", region: "동부 전선", manager_person_id: 601 },
    { depot_id: 902, name: "서림 창고", region: "서부 전선", manager_person_id: 602 },
    { depot_id: 903, name: "북진 창고", region: "북부 전선", manager_person_id: 603 },
  ],
  operator: [
    { person_id: 601, name: "라현우", role: "창고 관리자", clearance: "A3" },
    { person_id: 602, name: "백서진", role: "수송 장교", clearance: "B2" },
    { person_id: 603, name: "차민오", role: "정비 책임자", clearance: "C1" },
    { person_id: 604, name: "도윤서", role: "민간 브로커", clearance: "외부" },
  ],
  shipment: [
    { shipment_id: 701, depot_id: 901, item: "의료 키트", quantity: 40, destination: "동부 초소", status: "분실", date: "2026-07-11" },
    { shipment_id: 702, depot_id: 901, item: "위성 배터리", quantity: 12, destination: "동부 초소", status: "분실", date: "2026-07-11" },
    { shipment_id: 703, depot_id: 902, item: "연료", quantity: 80, destination: "서부 초소", status: "도착", date: "2026-07-10" },
  ],
  approval_log: [
    { id: 1, shipment_id: 701, approver_person_id: 601, approval_code: "A3-778", approved_at: "2026-07-11 01:12", source_terminal: "HRM-02" },
    { id: 2, shipment_id: 702, approver_person_id: 601, approval_code: "A3-778", approved_at: "2026-07-11 01:14", source_terminal: "HRM-02" },
    { id: 3, shipment_id: 703, approver_person_id: 602, approval_code: "B2-441", approved_at: "2026-07-10 08:40", source_terminal: "SRM-01" },
  ],
  terminal_access: [
    { id: 1, terminal: "HRM-02", person_id: 601, access_time: "2026-07-11 00:59", result: "성공" },
    { id: 2, terminal: "HRM-02", person_id: 604, access_time: "2026-07-11 01:02", result: "실패" },
    { id: 3, terminal: "SRM-01", person_id: 602, access_time: "2026-07-10 08:21", result: "성공" },
  ],
  broker_payment: [
    { id: 1, sender_person_id: 604, receiver_person_id: 601, amount: 5000000, date: "2026-07-12", memo: "야간 운송 수고비" },
    { id: 2, sender_person_id: 603, receiver_person_id: 602, amount: 120000, date: "2026-07-09", memo: "정비 부품" },
  ],
};

const relations = [
  ["person", "id", "receipt", "person_id"],
  ["person", "id", "interview", "person_id"],
  ["person", "id", "vehicle", "person_id"],
  ["person", "id", "museum_membership", "person_id"],
  ["person", "id", "gym_checkin", "person_id"],
  ["person", "id", "event_attendance", "person_id"],
  ["person", "id", "gala_detail", "person_id"],
  ["person", "id", "marina_checkin", "person_id"],
  ["person", "id", "bank_transaction", "person_id"],
  ["person", "id", "user_account", "person_id"],
  ["user_account", "account_id", "access_log", "account_id"],
  ["user_account", "account_id", "device_inventory", "account_id"],
  ["user_account", "account_id", "vpn_session", "account_id"],
  ["user_account", "account_id", "code_repository", "account_id"],
  ["supply_depot", "depot_id", "shipment", "depot_id"],
  ["operator", "person_id", "supply_depot", "manager_person_id"],
  ["shipment", "shipment_id", "approval_log", "shipment_id"],
  ["operator", "person_id", "approval_log", "approver_person_id"],
  ["operator", "person_id", "terminal_access", "person_id"],
  ["operator", "person_id", "broker_payment", "sender_person_id"],
  ["operator", "person_id", "broker_payment", "receiver_person_id"],
];

const stages = {
  murder: {
    number: 1,
    level: "Lv.1",
    difficulty: "입문",
    track: "추론",
    estimatedMinutes: 12,
    concepts: ["SELECT", "WHERE", "ORDER BY"],
    title: "미술관 살인사건",
    code: "HM-2026-0518",
    brief:
      "서울 한빛 미술관 폐관 직후, 지하 보존실에서 큐레이터가 숨진 채 발견됐다. 현장 기록과 목격자 진술을 연결해 실행범과 배후를 찾아야 한다.",
    objective: "실행범과 배후를 최종 보고서에 제출하세요.",
    databaseLabel: "브라우저 내장 SQLite 실습 DB · 경찰 사건 파일",
    answerLabels: ["실행범", "배후"],
    answers: [["최도윤", "301"], ["윤채원", "401"]],
    success: "정답입니다. 최도윤이 실행했고, 윤채원이 위작 계약서를 숨기기 위해 살인을 의뢰했습니다.",
    hint: "crime_scene_report에서 사건 기록을 읽고, person, receipt, interview를 이어 목격자를 확인하세요.",
    tables: [
      "crime_scene_report",
      "person",
      "receipt",
      "interview",
      "vehicle",
      "museum_membership",
      "gym_checkin",
      "event_attendance",
      "gala_detail",
      "marina_checkin",
      "bank_transaction",
    ],
    evidence: [
      { id: "crime", text: "한빛 미술관 사건 기록 확인", tokens: ["한빛 미술관 지하 보존실", "목격자"] },
      { id: "witnessA", text: "은행나무길 목격자 특정", tokens: ["김하늘", "은행나무길"] },
      { id: "witnessB", text: "카페 영수증 목격자 특정", tokens: ["서준호", "달빛카페"] },
      { id: "interviews", text: "두 목격자의 핵심 진술 확보", tokens: ["검은 후드티", "VIP"] },
      { id: "primary", text: "실행범 근거 연결", tokensAny: [["최도윤", "12서73K8"], ["최도윤", "골드"], ["최도윤", "북촌 체육관"]] },
      { id: "secondary", text: "배후 근거 연결", tokensAny: [["윤채원", "루비 목걸이"], ["윤채원", "잠실 요트클럽"], ["윤채원", "10000000"]] },
    ],
  },
  cyber: {
    number: 2,
    level: "Lv.3",
    difficulty: "중급",
    track: "보안",
    estimatedMinutes: 20,
    concepts: ["JOIN", "LIKE", "서브쿼리"],
    title: "침입 로그 추적",
    code: "IR-2026-0602",
    brief:
      "정산 API에서 새벽 대량 export가 발생했다. 계정, 접속 IP, 장비, VPN, 저장소 기록을 이어 실제 침입자와 의뢰자를 찾아야 한다.",
    objective: "침입자와 의뢰자를 최종 보고서에 제출하세요.",
    databaseLabel: "브라우저 내장 SQLite 실습 DB · 보안 로그",
    answerLabels: ["침입자", "의뢰자"],
    answers: [["강태오", "501"], ["문태경", "403"]],
    success: "정답입니다. 강태오가 외부 계약자 계정으로 export를 실행했고, 문태경의 송금 기록이 의뢰 정황과 맞물립니다.",
    hint: "security_alert의 IP를 access_log에서 추적하고, user_account를 person과 연결하세요.",
    tables: ["security_alert", "person", "user_account", "access_log", "device_inventory", "vpn_session", "code_repository", "bank_transaction"],
    evidence: [
      { id: "alert", text: "높음 등급 보안 알림 확인", tokens: ["203.0.113.73", "대량 export"] },
      { id: "ip", text: "의심 IP의 성공 이벤트 확인", tokens: ["203.0.113.73", "success", "export"] },
      { id: "account", text: "계정과 실제 인물 연결", tokens: ["강태오", "tae.k"] },
      { id: "device", text: "장비와 VPN 이상 징후 확인", tokensAny: [["TAE-LAPTOP-02", "우회"], ["강태오", "우회"]] },
      { id: "repo", text: "저장소 토큰 접근 확인", tokens: ["settlement-api", "token_read"] },
      { id: "secondary", text: "송금 정황으로 의뢰자 추론", tokensAny: [["문태경", "7000000"], ["강태오", "7000000"]] },
    ],
  },
  supply: {
    number: 3,
    level: "Lv.4",
    difficulty: "상급",
    track: "운영",
    estimatedMinutes: 28,
    concepts: ["JOIN", "GROUP BY", "HAVING"],
    title: "보급망 이상 징후",
    code: "OP-2026-0711",
    brief:
      "동부 전선 3번 보급선에서 의료 키트와 위성 배터리가 사라졌다. 창고, 승인 기록, 터미널 접근, 브로커 송금을 연결해 내부 협력자와 외부 의뢰자를 찾아야 한다.",
    objective: "내부 협력자와 외부 의뢰자를 최종 보고서에 제출하세요.",
    databaseLabel: "브라우저 내장 SQLite 실습 DB · 보급망 작전 파일",
    answerLabels: ["내부 협력자", "외부 의뢰자"],
    answers: [["라현우", "601"], ["도윤서", "604"]],
    success: "정답입니다. 라현우의 승인 코드가 분실 운송에 쓰였고, 도윤서의 송금 기록이 외부 의뢰 정황을 뒷받침합니다.",
    hint: "supply_report에서 단서를 잡고, shipment와 approval_log를 depot_id와 shipment_id로 연결하세요.",
    tables: ["supply_report", "supply_depot", "operator", "shipment", "approval_log", "terminal_access", "broker_payment"],
    evidence: [
      { id: "report", text: "긴급 보급선 보고서 확인", tokens: ["해람 창고", "내부 승인 코드"] },
      { id: "lost", text: "분실 품목과 창고 확인", tokens: ["의료 키트", "위성 배터리", "분실"] },
      { id: "approval", text: "변조된 승인 코드 확인", tokens: ["A3-778", "HRM-02"] },
      { id: "access", text: "터미널 접근자 확인", tokens: ["라현우", "HRM-02", "성공"] },
      { id: "payment", text: "브로커 송금 기록 확인", tokens: ["도윤서", "라현우", "5000000"] },
    ],
  },
};

let SQLRuntime;
let sqlite;
let currentStageKey = "murder";
let currentTourIndex = 0;
let activeLevelFilter = "전체";
let activeConceptFilter = "전체";
let authMode = "login";
let currentUser = null;
const completedEvidence = new Map(Object.keys(stages).map((key) => [key, new Set()]));
const completedStages = new Set(JSON.parse(window.localStorage.getItem("sqlLabCompletedStages") || "[]"));
const stageMetrics = loadStageMetrics();

const elements = {
  landingView: document.querySelector("#landingView"),
  homeView: document.querySelector("#homeView"),
  caseView: document.querySelector("#caseView"),
  navHomeButton: document.querySelector("#navHomeButton"),
  navCurrentCase: document.querySelector("#navCurrentCase"),
  startProblemsButton: document.querySelector("#startProblemsButton"),
  landingLoginButton: document.querySelector("#landingLoginButton"),
  authOpenButton: document.querySelector("#authOpenButton"),
  authUserBadge: document.querySelector("#authUserBadge"),
  authUserName: document.querySelector("#authUserName"),
  logoutButton: document.querySelector("#logoutButton"),
  authOverlay: document.querySelector("#authOverlay"),
  authCloseButton: document.querySelector("#authCloseButton"),
  authTitle: document.querySelector("#authTitle"),
  authForm: document.querySelector("#authForm"),
  displayNameField: document.querySelector("#displayNameField"),
  displayNameInput: document.querySelector("#displayNameInput"),
  emailInput: document.querySelector("#emailInput"),
  passwordInput: document.querySelector("#passwordInput"),
  authSubmitButton: document.querySelector("#authSubmitButton"),
  authMessage: document.querySelector("#authMessage"),
  backToProblemsButton: document.querySelector("#backToProblemsButton"),
  detailEyebrow: document.querySelector("#detailEyebrow"),
  detailTitle: document.querySelector("#detailTitle"),
  detailSummary: document.querySelector("#detailSummary"),
  detailMeta: document.querySelector("#detailMeta"),
  stageCode: document.querySelector("#stageCode"),
  stageProgressSummary: document.querySelector("#stageProgressSummary"),
  solvedStat: document.querySelector("#solvedStat"),
  cleanSolveStat: document.querySelector("#cleanSolveStat"),
  queryStat: document.querySelector("#queryStat"),
  submitStat: document.querySelector("#submitStat"),
  levelFilters: document.querySelector("#levelFilters"),
  conceptFilters: document.querySelector("#conceptFilters"),
  stageGrid: document.querySelector("#stageGrid"),
  stageTitle: document.querySelector("#stageTitle"),
  difficultyBadge: document.querySelector("#difficultyBadge"),
  stageBrief: document.querySelector("#stageBrief"),
  stageObjective: document.querySelector("#stageObjective"),
  databaseLabel: document.querySelector("#databaseLabel"),
  progressText: document.querySelector("#progressText"),
  evidenceList: document.querySelector("#evidenceList"),
  hintText: document.querySelector("#hintText"),
  hintBox: document.querySelector("#hintBox"),
  mapButton: document.querySelector("#mapButton"),
  dataMapOverlay: document.querySelector("#dataMapOverlay"),
  closeMapButton: document.querySelector("#closeMapButton"),
  erdCanvas: document.querySelector("#erdCanvas"),
  inspectorTitle: document.querySelector("#inspectorTitle"),
  inspectorBody: document.querySelector("#inspectorBody"),
  sqlInput: document.querySelector("#sqlInput"),
  runButton: document.querySelector("#runButton"),
  clearButton: document.querySelector("#clearButton"),
  tutorialButton: document.querySelector("#tutorialButton"),
  message: document.querySelector("#message"),
  resultTable: document.querySelector("#resultTable"),
  primaryAnswerLabel: document.querySelector("#primaryAnswerLabel"),
  secondaryAnswerLabel: document.querySelector("#secondaryAnswerLabel"),
  primaryInput: document.querySelector("#primaryInput"),
  secondaryInput: document.querySelector("#secondaryInput"),
  submitReportButton: document.querySelector("#submitReportButton"),
  verdict: document.querySelector("#verdict"),
  tutorialOverlay: document.querySelector("#tutorialOverlay"),
  tutorialStep: document.querySelector("#tutorialStep"),
  tutorialTitle: document.querySelector("#tutorialTitle"),
  tutorialText: document.querySelector("#tutorialText"),
  tutorialSkip: document.querySelector("#tutorialSkip"),
  tutorialNext: document.querySelector("#tutorialNext"),
};

async function init() {
  bindEvents();
  renderFilters();
  renderStageBoard();
  applyStage(currentStageKey);
  setMessage("SQLite 엔진을 준비하고 있습니다.", "");
  SQLRuntime = await initSqlJs({ locateFile: (file) => `vendor/${file}` });
  sqlite = createDatabase();
  elements.databaseLabel.textContent = currentStage().databaseLabel;
  setMessage("데이터 지도를 열어 테이블을 살펴본 뒤 직접 쿼리를 작성해 보세요.", "");
  window.caseGame = { executeSql, isCorrectReport };
  renderRoute({ replace: true });
  refreshAuth();
}

function bindEvents() {
  elements.stageGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-stage]");
    if (!button) return;
    navigateToStage(button.dataset.stage);
  });
  elements.navHomeButton.addEventListener("click", navigateToHome);
  elements.startProblemsButton.addEventListener("click", navigateToProblemList);
  elements.landingLoginButton.addEventListener("click", () => openAuth("login"));
  elements.backToProblemsButton.addEventListener("click", navigateToProblemList);
  elements.authOpenButton.addEventListener("click", () => openAuth("login"));
  elements.authCloseButton.addEventListener("click", closeAuth);
  elements.authOverlay.addEventListener("click", (event) => {
    if (event.target === elements.authOverlay) closeAuth();
  });
  elements.authForm.addEventListener("submit", handleAuthSubmit);
  elements.logoutButton.addEventListener("click", logout);
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.nav === "problems") navigateToProblemList();
      else navigateToInfoPage(button.dataset.nav);
    });
  });
  window.addEventListener("hashchange", () => renderRoute());
  elements.levelFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    activeLevelFilter = button.dataset.level;
    renderFilters();
    renderStageBoard();
  });
  elements.conceptFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-concept]");
    if (!button) return;
    activeConceptFilter = button.dataset.concept;
    renderFilters();
    renderStageBoard();
  });

  elements.runButton.addEventListener("click", runCurrentQuery);
  elements.clearButton.addEventListener("click", () => {
    elements.sqlInput.value = "";
    renderTable([], []);
    setMessage("콘솔을 비웠습니다. 새 질문을 작성해 보세요.", "");
  });
  elements.sqlInput.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") runCurrentQuery();
  });
  elements.mapButton.addEventListener("click", openDataMap);
  elements.closeMapButton.addEventListener("click", closeDataMap);
  elements.dataMapOverlay.addEventListener("click", (event) => {
    if (event.target === elements.dataMapOverlay) closeDataMap();
  });
  elements.erdCanvas.addEventListener("click", (event) => {
    const node = event.target.closest("[data-table]");
    if (!node) return;
    inspectTable(node.dataset.table);
  });
  elements.hintBox.addEventListener("toggle", () => {
    if (!elements.hintBox.open) return;
    const metrics = metricsFor(currentStageKey);
    metrics.hintUsed = true;
    saveStageMetrics();
    renderStageBoard();
  });
  elements.submitReportButton.addEventListener("click", submitReport);
  elements.tutorialButton.addEventListener("click", openTutorial);
  elements.tutorialSkip.addEventListener("click", closeTutorial);
  elements.tutorialNext.addEventListener("click", nextTourStep);
}

function currentStage() {
  return stages[currentStageKey];
}

function navigateToHome() {
  if (window.location.hash === "#/" || window.location.hash === "") {
    renderRoute();
    return;
  }
  window.location.hash = "#/";
}

function navigateToProblemList() {
  if (window.location.hash === "#/problems") {
    renderRoute();
    return;
  }
  window.location.hash = "#/problems";
}

function navigateToInfoPage(page) {
  if (page === "home") {
    navigateToHome();
    return;
  }
  const targetHash = `#/${page}`;
  if (window.location.hash === targetHash) {
    renderRoute();
    return;
  }
  window.location.hash = targetHash;
}

function navigateToStage(stageKey) {
  if (!stages[stageKey]) return;
  const targetHash = `#/problems/${stageKey}`;
  if (window.location.hash === targetHash) {
    renderRoute();
    return;
  }
  window.location.hash = targetHash;
}

function renderRoute({ replace = false } = {}) {
  const stageKey = parseStageFromHash();
  if (stageKey) {
    showCaseView(stageKey);
    return;
  }

  if (replace && !window.location.hash) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#/`);
  }
  if (window.location.hash === "#/problems") {
    showProblemListView();
    return;
  }
  if (window.location.hash === "#/learn" || window.location.hash === "#/stats") {
    showLandingView(window.location.hash.slice(2));
    return;
  }
  showLandingView("home");
}

function parseStageFromHash() {
  const match = window.location.hash.match(/^#\/problems\/([a-z0-9_-]+)$/i);
  const key = match?.[1];
  return stages[key] ? key : "";
}

function showProblemListView() {
  elements.landingView.classList.add("hidden");
  elements.homeView.classList.remove("hidden");
  elements.caseView.classList.add("hidden");
  elements.navCurrentCase.textContent = "문제 목록";
  closeDataMap();
  closeTutorial({ markSeen: false });
  renderStageBoard();
  setActiveNav("problems");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCaseView(stageKey) {
  elements.landingView.classList.add("hidden");
  elements.homeView.classList.add("hidden");
  elements.caseView.classList.remove("hidden");
  applyStage(stageKey);
  closeDataMap();
  setActiveNav("problems");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (!window.localStorage.getItem("sqlLabTourSeen")) openTutorial();
}

function showLandingView(activeNav = "home") {
  elements.landingView.classList.remove("hidden");
  elements.homeView.classList.add("hidden");
  elements.caseView.classList.add("hidden");
  elements.navCurrentCase.textContent = activeNav === "stats" ? "기록 안내" : activeNav === "learn" ? "학습 안내" : "홈";
  closeDataMap();
  closeTutorial({ markSeen: false });
  setActiveNav(activeNav);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setActiveNav(navName) {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === navName);
  });
}

async function refreshAuth() {
  try {
    const data = await apiRequest("/api/auth/me");
    currentUser = data.user;
    renderAuthState();
  } catch {
    currentUser = null;
    renderAuthState();
  }
}

function renderAuthState() {
  const loggedIn = Boolean(currentUser);
  elements.authOpenButton.classList.toggle("hidden", loggedIn);
  elements.authUserBadge.classList.toggle("hidden", !loggedIn);
  if (!loggedIn) {
    elements.authUserName.innerHTML = "";
    return;
  }
  const name = currentUser.githubUsername ? `@${currentUser.githubUsername}` : currentUser.displayName;
  elements.authUserName.innerHTML = currentUser.githubProfileUrl
    ? `<a href="${escapeHtml(currentUser.githubProfileUrl)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a>`
    : escapeHtml(name);
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  elements.authOverlay.classList.remove("hidden");
  elements.authMessage.textContent = "";
  elements.authMessage.className = "auth-message";
  setTimeout(() => elements.emailInput.focus(), 0);
}

function closeAuth() {
  elements.authOverlay.classList.add("hidden");
  elements.authForm.reset();
}

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  const isRegister = authMode === "register";
  elements.authTitle.textContent = isRegister ? "회원가입" : "로그인";
  elements.authSubmitButton.textContent = isRegister ? "회원가입" : "로그인";
  elements.displayNameField.classList.toggle("hidden", !isRegister);
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === authMode);
  });
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  elements.authSubmitButton.disabled = true;
  setAuthMessage("처리 중입니다.", "");
  const payload = {
    email: elements.emailInput.value,
    password: elements.passwordInput.value,
  };
  if (authMode === "register") payload.displayName = elements.displayNameInput.value;

  try {
    const data = await apiRequest(authMode === "register" ? "/api/auth/register" : "/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    currentUser = data.user;
    renderAuthState();
    setAuthMessage("로그인되었습니다.", "success");
    setTimeout(closeAuth, 350);
  } catch (error) {
    setAuthMessage(error.message, "error");
  } finally {
    elements.authSubmitButton.disabled = false;
  }
}

async function logout() {
  await apiRequest("/api/auth/logout", { method: "POST" });
  currentUser = null;
  renderAuthState();
}

function setAuthMessage(text, type) {
  elements.authMessage.textContent = text;
  elements.authMessage.className = `auth-message ${type}`.trim();
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "same-origin",
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "요청에 실패했습니다.");
  return data;
}

function loadStageMetrics() {
  const saved = JSON.parse(window.localStorage.getItem("sqlLabStageMetrics") || "{}");
  Object.keys(stages).forEach((key) => {
    saved[key] = {
      queryCount: 0,
      submitCount: 0,
      hintUsed: false,
      solvedAt: "",
      lastPlayedAt: "",
      ...(saved[key] || {}),
    };
    if (completedStages.has(key) && !saved[key].solvedAt) saved[key].solvedAt = "legacy";
  });
  return saved;
}

function metricsFor(stageKey) {
  return stageMetrics[stageKey];
}

function saveStageMetrics() {
  window.localStorage.setItem("sqlLabStageMetrics", JSON.stringify(stageMetrics));
}

function createDatabase() {
  const database = new SQLRuntime.Database();
  Object.entries(db).forEach(([tableName, rows]) => {
    const columns = unionColumns(rows);
    const definitions = columns.map((column) => `${quoteIdentifier(column)} ${inferSqlType(rows, column)}`);
    database.run(`CREATE TABLE ${quoteIdentifier(tableName)} (${definitions.join(", ")});`);
    if (!rows.length) return;

    const placeholders = columns.map(() => "?").join(", ");
    const insert = database.prepare(
      `INSERT INTO ${quoteIdentifier(tableName)} (${columns.map(quoteIdentifier).join(", ")}) VALUES (${placeholders});`,
    );
    rows.forEach((row) => insert.run(columns.map((column) => row[column] ?? null)));
    insert.free();
  });
  return database;
}

function unionColumns(rows) {
  return [...new Set(rows.flatMap((row) => Object.keys(row)))];
}

function inferSqlType(rows, column) {
  const sample = rows.map((row) => row[column]).find((value) => value !== null && value !== undefined);
  if (Number.isInteger(sample)) return "INTEGER";
  if (typeof sample === "number") return "REAL";
  return "TEXT";
}

function quoteIdentifier(identifier) {
  return `"${String(identifier).replaceAll('"', '""')}"`;
}

function applyStage(stageKey) {
  currentStageKey = stageKey;
  const stage = currentStage();
  elements.stageCode.textContent = `${stage.number}단계`;
  elements.navCurrentCase.textContent = `${stage.number}단계 ${stage.title}`;
  elements.detailEyebrow.textContent = `${stage.level} · ${stage.track} · ${stage.estimatedMinutes}분`;
  elements.detailTitle.textContent = stage.title;
  elements.detailSummary.textContent = stage.brief;
  elements.detailMeta.innerHTML = stage.concepts.map((concept) => `<span>${concept}</span>`).join("");
  elements.stageTitle.textContent = `${stage.number}단계 ${stage.title}`;
  elements.difficultyBadge.textContent = `${stage.level} · ${stage.difficulty}`;
  elements.stageBrief.textContent = stage.brief;
  elements.stageObjective.textContent = stage.objective;
  elements.databaseLabel.textContent = stage.databaseLabel;
  elements.primaryAnswerLabel.textContent = stage.answerLabels[0];
  elements.secondaryAnswerLabel.textContent = stage.answerLabels[1];
  elements.hintText.textContent = stage.hint;
  elements.hintBox.open = false;
  elements.primaryInput.value = "";
  elements.secondaryInput.value = "";
  elements.verdict.textContent = "";
  elements.sqlInput.value = "";
  const metrics = metricsFor(stageKey);
  metrics.lastPlayedAt = new Date().toISOString();
  saveStageMetrics();
  renderTable([], []);
  renderStageBoard();
  renderEvidence();
  renderErd();
  inspectTable(stage.tables[0]);
  setMessage("데이터 지도를 열어 테이블을 살펴본 뒤 직접 쿼리를 작성해 보세요.", "");
}

function renderStageBoard() {
  renderStats();
  const finished = completedStages.size;
  const total = Object.keys(stages).length;
  elements.stageProgressSummary.textContent = `${finished} / ${total} 완료`;
  const filteredStages = Object.entries(stages).filter(([, stage]) => {
    const levelMatches = activeLevelFilter === "전체" || stage.level === activeLevelFilter;
    const conceptMatches = activeConceptFilter === "전체" || stage.concepts.includes(activeConceptFilter);
    return levelMatches && conceptMatches;
  });
  elements.stageGrid.innerHTML = filteredStages
    .map(([key, stage]) => {
      const evidence = completedEvidence.get(key);
      const metrics = metricsFor(key);
      const status = completedStages.has(key) ? "완료" : key === currentStageKey ? "진행 중" : "진행 가능";
      const active = key === currentStageKey ? "active" : "";
      const done = completedStages.has(key) ? "done" : "";
      return `
        <button class="stage-card ${active} ${done}" type="button" data-stage="${key}">
          <span class="stage-number">${stage.number}</span>
          <span class="stage-meta">${stage.level} · ${stage.track} · ${status}</span>
          <strong>${stage.title}</strong>
          <span>${stage.brief}</span>
          <div class="concept-row">
            ${stage.concepts.map((concept) => `<small>${concept}</small>`).join("")}
          </div>
          <em>${stage.estimatedMinutes}분 · ${evidence.size} / ${stage.evidence.length} 증거 · 쿼리 ${metrics.queryCount} · 제출 ${metrics.submitCount}</em>
        </button>
      `;
    })
    .join("");
  if (!filteredStages.length) {
    elements.stageGrid.innerHTML = `<div class="empty-card">조건에 맞는 문제가 없습니다.</div>`;
  }
}

function renderFilters() {
  const levels = ["전체", ...new Set(Object.values(stages).map((stage) => stage.level))];
  const concepts = ["전체", ...new Set(Object.values(stages).flatMap((stage) => stage.concepts))];
  elements.levelFilters.innerHTML = levels
    .map((level) => `<button class="${level === activeLevelFilter ? "active" : ""}" type="button" data-level="${level}">${level}</button>`)
    .join("");
  elements.conceptFilters.innerHTML = concepts
    .map((concept) => `<button class="${concept === activeConceptFilter ? "active" : ""}" type="button" data-concept="${concept}">${concept}</button>`)
    .join("");
}

function renderStats() {
  const metrics = Object.values(stageMetrics);
  elements.solvedStat.textContent = completedStages.size;
  elements.cleanSolveStat.textContent = metrics.filter((item) => item.solvedAt && !item.hintUsed).length;
  elements.queryStat.textContent = metrics.reduce((sum, item) => sum + item.queryCount, 0);
  elements.submitStat.textContent = metrics.reduce((sum, item) => sum + item.submitCount, 0);
}

function renderEvidence() {
  const evidenceSet = completedEvidence.get(currentStageKey);
  const evidence = currentStage().evidence;
  elements.progressText.textContent = `${evidenceSet.size} / ${evidence.length}`;
  elements.evidenceList.innerHTML = evidence
    .map((item, index) => {
      const done = evidenceSet.has(item.id);
      return `
        <li class="${done ? "done" : ""}">
          <span class="badge">${done ? "✓" : index + 1}</span>
          <span>${item.text}</span>
        </li>
      `;
    })
    .join("");
}

function runCurrentQuery() {
  try {
    const metrics = metricsFor(currentStageKey);
    metrics.queryCount += 1;
    metrics.lastPlayedAt = new Date().toISOString();
    saveStageMetrics();
    const result = executeSql(elements.sqlInput.value);
    renderTable(result.rows, result.columns);
    evaluateProgress(result.rows);
    setMessage(`${result.rows.length}개 행을 찾았습니다.`, "success");
  } catch (error) {
    renderTable([], []);
    renderStageBoard();
    setMessage(error.message, "error");
  }
}

function executeSql(sql) {
  if (!sqlite) throw new Error("SQLite 엔진이 아직 준비되지 않았습니다.");
  const query = sql.trim();
  if (!query) throw new Error("쿼리를 입력해 주세요.");
  if (hasBlockedStatement(query)) throw new Error("이 실습 DB는 읽기 전용입니다. SELECT, WITH, PRAGMA 조회만 실행할 수 있습니다.");
  if (!/^(select|with|pragma)\b/i.test(query)) throw new Error("조회 쿼리만 실행할 수 있습니다. SELECT 또는 WITH로 시작해 주세요.");

  const results = sqlite.exec(query);
  if (!results.length) return { columns: [], rows: [] };
  const result = results.at(-1);
  return {
    columns: result.columns,
    rows: result.values.map((values) => Object.fromEntries(result.columns.map((column, index) => [column, values[index]]))),
  };
}

function hasBlockedStatement(query) {
  return /\b(insert|update|delete|drop|alter|create|replace|attach|detach|vacuum|reindex|analyze|begin|commit|rollback)\b/i.test(query);
}

function renderTable(rows, columns) {
  if (!columns.length) {
    elements.resultTable.innerHTML = `<tbody><tr><td class="empty-result">결과가 아직 없습니다.</td></tr></tbody>`;
    return;
  }
  const header = columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("");
  const body = rows
    .map((row) => `<tr>${columns.map((column) => `<td>${escapeHtml(String(row[column] ?? ""))}</td>`).join("")}</tr>`)
    .join("");
  elements.resultTable.innerHTML = `<thead><tr>${header}</tr></thead><tbody>${body}</tbody>`;
}

function evaluateProgress(rows) {
  const evidenceSet = completedEvidence.get(currentStageKey);
  const text = rowsToSearchText(rows);
  currentStage().evidence.forEach((item) => {
    if (evidenceMatches(item, text)) evidenceSet.add(item.id);
  });
  renderEvidence();
  renderStageBoard();
}

function evidenceMatches(item, text) {
  if (item.tokens && item.tokens.every((token) => text.includes(String(token)))) return true;
  if (item.tokensAny && item.tokensAny.some((group) => group.every((token) => text.includes(String(token))))) return true;
  return false;
}

function rowsToSearchText(rows) {
  return rows.flatMap((row) => Object.values(row)).map((value) => String(value ?? "")).join(" ");
}

function submitReport() {
  const metrics = metricsFor(currentStageKey);
  metrics.submitCount += 1;
  metrics.lastPlayedAt = new Date().toISOString();
  if (isCorrectReport(elements.primaryInput.value, elements.secondaryInput.value)) {
    const evidenceSet = completedEvidence.get(currentStageKey);
    currentStage().evidence.forEach((item) => evidenceSet.add(item.id));
    completedStages.add(currentStageKey);
    metrics.solvedAt = metrics.solvedAt || new Date().toISOString();
    saveStageMetrics();
    window.localStorage.setItem("sqlLabCompletedStages", JSON.stringify([...completedStages]));
    renderEvidence();
    renderStageBoard();
    elements.verdict.textContent = currentStage().success;
    elements.verdict.style.color = "#a8e0b7";
    return;
  }
  saveStageMetrics();
  renderStageBoard();
  elements.verdict.textContent = "아직 결론이 맞지 않습니다. 데이터 지도에서 연결 키를 다시 확인하고 결과를 더 좁혀 보세요.";
  elements.verdict.style.color = "#ffb0a5";
}

function isCorrectReport(primaryAnswer, secondaryAnswer) {
  const [primaryAnswers, secondaryAnswers] = currentStage().answers;
  const primary = normalizeAnswer(primaryAnswer);
  const secondary = normalizeAnswer(secondaryAnswer);
  return primaryAnswers.some((answer) => normalizeAnswer(answer) === primary) && secondaryAnswers.some((answer) => normalizeAnswer(answer) === secondary);
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/\s/g, "");
}

function openDataMap() {
  elements.dataMapOverlay.classList.remove("hidden");
  renderErd();
  inspectTable(currentStage().tables[0]);
}

function closeDataMap() {
  elements.dataMapOverlay.classList.add("hidden");
}

function renderErd() {
  const stage = currentStage();
  const stageRelations = relations.filter(([from, , to]) => stage.tables.includes(from) && stage.tables.includes(to));
  const positions = layoutTables(stage.tables);
  const lineHtml = stageRelations
    .map(([from, fromKey, to, toKey]) => {
      const start = positions[from];
      const end = positions[to];
      if (!start || !end) return "";
      const x1 = start.x + start.w / 2;
      const y1 = start.y + start.h / 2;
      const x2 = end.x + end.w / 2;
      const y2 = end.y + end.h / 2;
      const labelX = (x1 + x2) / 2;
      const labelY = (y1 + y2) / 2 - 6;
      return `
        <path class="erd-line" d="M ${x1} ${y1} C ${x1 + 80} ${y1}, ${x2 - 80} ${y2}, ${x2} ${y2}" />
        <text class="erd-line-label" x="${labelX}" y="${labelY}">${fromKey} → ${toKey}</text>
      `;
    })
    .join("");
  const nodeHtml = stage.tables
    .map((table) => {
      const pos = positions[table];
      const columns = unionColumns(db[table] || []);
      const lines = columns.slice(0, 4).map((column, index) => `<text class="erd-column" x="${pos.x + 16}" y="${pos.y + 58 + index * 20}">${column}</text>`).join("");
      return `
        <g class="erd-node" data-table="${table}" tabindex="0">
          <rect x="${pos.x}" y="${pos.y}" width="${pos.w}" height="${pos.h}" rx="8"></rect>
          <text class="erd-title" x="${pos.x + 16}" y="${pos.y + 30}">${table}</text>
          ${lines}
        </g>
      `;
    })
    .join("");
  elements.erdCanvas.innerHTML = `
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#e2b75b"></path>
      </marker>
    </defs>
    ${lineHtml}
    ${nodeHtml}
  `;
}

function layoutTables(tables) {
  const centerTables = ["person", "user_account", "operator", "shipment"];
  const center = tables.find((table) => centerTables.includes(table)) || tables[0];
  const others = tables.filter((table) => table !== center);
  const positions = { [center]: { x: 520, y: 320, w: 210, h: 140 } };
  const slots = [
    [70, 80],
    [360, 70],
    [820, 70],
    [1060, 170],
    [930, 510],
    [650, 570],
    [350, 560],
    [80, 430],
    [70, 250],
    [1060, 360],
  ];
  others.forEach((table, index) => {
    const [x, y] = slots[index] || [90 + (index % 4) * 290, 90 + Math.floor(index / 4) * 210];
    positions[table] = { x, y, w: 210, h: 140 };
  });
  return positions;
}

function inspectTable(tableName) {
  const rows = db[tableName] || [];
  const columns = unionColumns(rows);
  elements.inspectorTitle.textContent = tableName;
  elements.inspectorBody.innerHTML = `
    <div class="column-list">
      ${columns.map((column) => `<span>${column}</span>`).join("")}
    </div>
    <div class="sample-table">
      <table>
        <thead><tr>${columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows.slice(0, 3).map((row) => `<tr>${columns.map((column) => `<td>${escapeHtml(String(row[column] ?? ""))}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
  document.querySelectorAll(".erd-node").forEach((node) => node.classList.toggle("selected", node.dataset.table === tableName));
}

function setMessage(text, type = "") {
  elements.message.textContent = text;
  elements.message.className = `message ${type}`.trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const tourSteps = [
  {
    selector: "[data-tour='case']",
    title: "목표와 증거 노트를 확인합니다",
    text: "목표는 결론 제출 기준이고, 증거 노트는 지금까지 결과에서 발견한 단서만 채워집니다.",
  },
  {
    selector: "[data-tour='map-button']",
    title: "데이터 지도에서 테이블을 봅니다",
    text: "데이터 지도 열기를 누르면 넓은 ERD가 뜹니다. 테이블을 클릭하면 열과 샘플 행을 확인할 수 있습니다.",
  },
  {
    selector: ".erd-canvas-wrap",
    title: "테이블 관계를 넓게 확인합니다",
    text: "ERD 선과 라벨로 테이블 사이의 연결을 보고, 궁금한 테이블을 눌러 샘플 데이터를 확인하세요.",
    openMap: true,
  },
  {
    selector: "[data-tour='console']",
    title: "직접 SQL 질문을 작성합니다",
    text: "콘솔은 비어 있습니다. 테이블 이름과 열을 보고 원하는 SELECT, JOIN, GROUP BY, 서브쿼리를 직접 작성하세요.",
    closeMap: true,
  },
  {
    selector: ".result-wrap",
    title: "결과에서 다음 단서를 고릅니다",
    text: "결과표에 의미 있는 이름, 번호, 시간, 금액이 보이면 그 값을 다음 쿼리의 조건으로 좁혀가면 됩니다.",
  },
  {
    selector: "[data-tour='report']",
    title: "마지막에는 보고서를 제출합니다",
    text: "충분히 근거가 모였다고 판단되면 이름이나 id를 입력해 사건을 종결하세요.",
  },
];

function openTutorial() {
  currentTourIndex = 0;
  elements.tutorialOverlay.classList.remove("hidden");
  renderTourStep();
}

function closeTutorial({ markSeen = true } = {}) {
  elements.tutorialOverlay.classList.add("hidden");
  document.querySelectorAll(".tour-target").forEach((node) => node.classList.remove("tour-target"));
  if (markSeen) window.localStorage.setItem("sqlLabTourSeen", "1");
}

function nextTourStep() {
  if (currentTourIndex === tourSteps.length - 1) {
    closeTutorial();
    return;
  }
  currentTourIndex += 1;
  renderTourStep();
}

function renderTourStep() {
  const step = tourSteps[currentTourIndex];
  if (step.openMap) openDataMap();
  if (step.closeMap) closeDataMap();
  document.querySelectorAll(".tour-target").forEach((node) => node.classList.remove("tour-target"));
  const target = document.querySelector(step.selector);
  if (target) {
    target.classList.add("tour-target");
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
  elements.tutorialStep.textContent = `${currentTourIndex + 1} / ${tourSteps.length}`;
  elements.tutorialTitle.textContent = step.title;
  elements.tutorialText.textContent = step.text;
  elements.tutorialNext.textContent = currentTourIndex === tourSteps.length - 1 ? "시작" : "다음";
}

init().catch((error) => {
  setMessage(`초기화 실패: ${error.message}`, "error");
});
