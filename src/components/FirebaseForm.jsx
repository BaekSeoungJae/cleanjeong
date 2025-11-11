import { useEffect } from "react";

const FirebaseForm = () => {
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((r) => r.json())
      .then(({ ip }) => {
        const url = `https://us-central1-cleanjung-v1.cloudfunctions.net/logIp?ip=${encodeURIComponent(
          ip || ""
        )}`;
        return fetch(url, { method: "GET", mode: "cors", keepalive: true });
      })
      .catch((e) => console.error("IP log failed:", e));
  }, []);

  return null;
};

export default FirebaseForm;
