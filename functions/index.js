// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const ALLOWED_ORIGIN = "https://www.cleanjeong.com";

exports.logIp = functions
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    // 1) 공통 CORS 헤더 (항상 먼저 세팅)
    res.set("Vary", "Origin");
    const origin = req.headers.origin;
    if (origin === ALLOWED_ORIGIN) {
      res.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
      // res.set("Access-Control-Allow-Credentials", "true"); // 필요 시만
    }
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set(
      "Access-Control-Allow-Headers",
      "Content-Type, X-Requested-With, Authorization"
    );
    res.set("Access-Control-Max-Age", "3600");

    // 2) 프리플라이트(OPTIONS) 빠른 종료
    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    // 3) 메서드 제한
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    try {
      const ip =
        req.headers["x-forwarded-for"] ||
        req.connection?.remoteAddress ||
        "unknown";
      const userAgent = req.headers["user-agent"] || "unknown";
      const referer = req.headers["referer"] || "unknown";

      // 필요하면 유지, 아니면 제거
      // if (referer.includes("vercel.app")) {
      //   return res.status(200).send("IP Logging Skipped: Referer is from Vercel");
      // }

      await admin
        .firestore()
        .collection("ipLogs")
        .add({
          ip,
          userAgent,
          referer,
          // 프런트에서 보낸 공개 IP도 기록하려면 아래 같이 병합
          clientIpFromBody: (req.body && req.body.ip) || null,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Error logging IP:", error);
      // 에러 응답에도 CORS 헤더가 유지되도록 try/catch 안에서 반환
      return res.status(500).json({ ok: false, error: "internal" });
    }
  });
