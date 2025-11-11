// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const ALLOWLIST = new Set([
  "https://www.cleanjeong.com",
  "https://cleanjeong.com",
  // "https://staging.cleanjeong.com",
]);

exports.logIp = functions
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    // ---- 공통 CORS 헤더 세팅 ----
    res.set("Vary", "Origin, Access-Control-Request-Headers"); // 캐시 안전

    const origin = req.headers.origin || "";
    const allowOrigin = ALLOWLIST.has(origin) ? origin : "";
    if (allowOrigin) {
      res.set("Access-Control-Allow-Origin", allowOrigin);
      // 프런트에서 credentials 쓴다면 true 필요
      res.set("Access-Control-Allow-Credentials", "true");
    }

    // 브라우저가 요구한 헤더 그대로 반사(없으면 안전 기본값)
    const reqAclReqHeaders =
      req.headers["access-control-request-headers"] || "Content-Type";
    res.set("Access-Control-Allow-Headers", reqAclReqHeaders);

    // 허용 메서드 명시
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");

    // 프리플라이트 캐시
    res.set("Access-Control-Max-Age", "3600");

    // ---- 프리플라이트 빠른 종료 ----
    if (req.method === "OPTIONS") {
      return res.status(204).send(""); // 헤더는 위에서 이미 세팅됨
    }

    // ---- 메서드 제한 ----
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

      await admin
        .firestore()
        .collection("ipLogs")
        .add({
          ip,
          userAgent,
          referer,
          clientIpFromBody: (req.body && req.body.ip) || null,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Error logging IP:", err);
      // 에러 시에도 CORS 헤더 유지됨(위에서 이미 세팅)
      return res.status(500).json({ ok: false, error: "internal" });
    }
  });
