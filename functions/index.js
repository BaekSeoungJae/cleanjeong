const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();

const corsHandler = cors({origin: true}); // ✅ 모든 도메인 허용

exports.logIp = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"] || "unknown";
    const referer = req.headers["referer"] || "unknown";

    const logData = {
      ip,
      userAgent,
      referer,
      timestamp: new Date().toISOString(),
    };

    admin
        .firestore()
        .collection("ipLogs")
        .add(logData)
        .then(() => {
          res.status(200).send("IP Logged");
        })
        .catch((error) => {
          console.error("Error logging IP:", error);
          res.status(500).send("Error logging IP");
        });
  });
});
