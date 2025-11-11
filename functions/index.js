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
    // ---- 디버그 태그 (현재 배포 버전 가시화) ----
    res.set("X-CORS-Probe", "logIp@2025-11-11T1456+0900");

    // ---- 공통 CORS 헤더 세팅 (항상 최우선) ----
    const origin = req.headers.origin || "";
    const reqAclReqHeaders =
      req.headers["access-control-request-headers"] || "";

    // 캐시 안전
    res.set("Vary", "Origin, Access-Control-Request-Headers");

    // 기본 허용 메서드
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");

    // 브라우저가 요구한 헤더 그대로 반사 (없으면 기본값)
    res.set(
      "Access-Control-Allow-Headers",
      reqAclReqHeaders || "Content-Type, Authorization, X-Requested-With"
    );

    // 프리플라이트 캐시
    res.set("Access-Control-Max-Age", "3600");

    // Origin 매칭
    const isAllowed = ALLOWLIST.has(origin);
    if (isAllowed) {
      res.set("Access-Control-Allow-Origin", origin);
      // 쿠키/세션을 쓸 가능성 고려해 항상 켜둠(프런트에서 include 안 쓰면 영향 없음)
      res.set("Access-Control-Allow-Credentials", "true");
    } else {
      // 디버깅에 도움되는 로그
      console.log("CORS block - origin not allowed:", origin);
    }

    // ---- 프리플라이트(OPTIONS) 빠른 종료 (반드시 헤더 세팅 후) ----
    if (req.method === "OPTIONS") {
      // 혹시 allowlist 미스매치여도 프리플라이트 단계에서만
      // 최소한의 진단을 위해 안전 오리진을 강제 세팅하고 종료할 수 있음.
      // 필요시 아래 2줄 주석 해제하여 테스트(임시):
      // if (!isAllowed) res.set("Access-Control-Allow-Origin", "https://www.cleanjeong.com");
      // if (!isAllowed) res.set("Access-Control-Allow-Credentials", "true");
      return res.status(204).send("");
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
      return res.status(500).json({ ok: false, error: "internal" });
    }
  });
