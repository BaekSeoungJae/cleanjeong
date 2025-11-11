import { useEffect } from "react";

const FirebaseForm = () => {
  useEffect(() => {
    // 1) 외부 IP 조회
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ip = encodeURIComponent(data?.ip || "");
        // 2) 프리플라이트 없는 GET 호출 (쿼리스트링 사용, 헤더 생략)
        const url = `https://us-central1-cleanjung-v1.cloudfunctions.net/logIp?ip=${ip}`;
        return fetch(url, { method: "GET", mode: "cors", keepalive: true });
      })
      .catch((err) => {
        // 문제시 콘솔에서 원인 추적 용
        console.error("IP log failed:", err);
      });
  }, []);

  return null;
};

export default FirebaseForm;
