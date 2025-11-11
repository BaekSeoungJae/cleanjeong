const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();

// 필요한 출처만 명시 (www/루트 둘 다)
const allowlist = ["https://www.cleanjeong.com", "https://cleanjeong.com"];
const corsHandler = cors({
  origin: function (origin, callback) {
    // 서버-서버 호출(서버 사이드 렌더링 등)에서는 origin이 없을 수 있음
    if (!origin) return callback(null, true);
    if (allowlist.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
});

exports.logIp = functions
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    // 공통 CORS 헤더 (미들웨어 이전에 최소 기본값 보장)
    const origin = req.headers.origin;
    if (origin && allowlist.includes(origin)) {
      res.set("Access-Control-Allow-Origin", origin);
    }
    res.set("Vary", "Origin");
    res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    // 1) 프리플라이트 사전 처리 (여기서 바로 종료)
    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    // 2) cors 미들웨어 적용
    corsHandler(req, res, async () => {
      // 허용 메서드만
      if (req.method !== "GET" && req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      try {
        const xff = (req.headers["x-forwarded-for"] || "").toString();
        const connIp = (req.connection && req.connection.remoteAddress) || "";
        const ipFromHeader =
          (req.body && req.body.ip) || (req.query && req.query.ip) || "";
        const ip = (
          xff.split(",")[0] ||
          ipFromHeader ||
          connIp ||
          "unknown"
        ).trim();

        const userAgent = req.headers["user-agent"] || "unknown";
        const referer = req.headers["referer"] || "unknown";

        // 운영 정책: vercel 미수집 유지
        if (referer.includes("vercel.app")) {
          return res
            .status(200)
            .send("IP Logging Skipped: Referer is from Vercel");
        }

        const logData = {
          ip,
          userAgent,
          referer,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        };

        await admin.firestore().collection("ipLogs").add(logData);
        return res.status(200).send("IP Logged");
      } catch (error) {
        console.error("Error logging IP:", error);
        return res.status(500).send("Error logging IP");
      }
    });
  });
