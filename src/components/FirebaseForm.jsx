import { useEffect } from "react";

const FirebaseForm = () => {
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        fetch("https://us-central1-cleanjung-v1.cloudfunctions.net/logIp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip: data.ip }),
        });
      });
  }, []);

  return null;
};

export default FirebaseForm;
