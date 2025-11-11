const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const ALLOWLIST = new Set([
  "https://www.cleanjeong.com",
  "https://cleanjeong.com",
]);

// 공통 CORS 헤더 적용 함수
function applyCors(req, res) {
  const origin = req.headers.origin || "";
  // 디버그/복구를 위해 우선 * 허용 (정상화되면 allowlist 방식으로 바꾸세요)
  // res.set("Access-Control-Allow-Origin", ALLOWLIST.has(origin) ? origin : "");
  res.set("Access-Control-Allow-Origin", "*"); // ← 우선 즉시 복구용
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

exports.logIp = functions
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    try {
      applyCors(req, res);

      // 프리플라이트 즉시 종료
      if (req.method === "OPTIONS") {
        return res.status(204).send("");
      }

      if (req.method !== "GET" && req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      // 여기까지 왔는데도 ACAO가 없다는 에러가 나오면, 런타임 전에 터지는 것 (배포/URL/리전 오타) 의심

      const xff = String(req.headers["x-forwarded-for"] || "");
      const connIp = (req.connection && req.connection.remoteAddress) || "";
      const bodyIp = (req.body && req.body.ip) || "";
      const queryIp = (req.query && req.query.ip) || "";
      const ip = (
        xff.split(",")[0] ||
        bodyIp ||
        queryIp ||
        connIp ||
        "unknown"
      ).trim();

      const userAgent = req.headers["user-agent"] || "unknown";
      const referer = req.headers["referer"] || "unknown";

      if (referer.includes("vercel.app")) {
        return res
          .status(200)
          .send("IP Logging Skipped: Referer is from Vercel");
      }

      await admin.firestore().collection("ipLogs").add({
        ip,
        userAgent,
        referer,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).send("IP Logged");
    } catch (err) {
      console.error("Error logging IP:", err);
      // 에러 응답에도 CORS 헤더가 남아 있어야 브라우저가 내용 확인 가능
      applyCors(req, res);
      return res.status(500).send("Error logging IP");
    }
  });
