const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();

const corsHandler = cors({ origin: true }); // 모든 도메인 허용

exports.logIp = functions.https.onRequest((req, res) => {
  // ✅ preflight 요청(OPTIONS)에 대한 응답 추가
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  // ✅ 본 요청 처리
  corsHandler(req, res, async () => {
    try {
      const ip =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        "unknown";
      const userAgent = req.headers["user-agent"] || "unknown";
      const referer = req.headers["referer"] || "unknown";

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
      res.set("Access-Control-Allow-Origin", "*");
      res.status(200).send("IP Logged");
    } catch (error) {
      console.error("Error logging IP:", error);
      res.status(500).send("Error logging IP");
    }
  });
});
