// src/pages/admin/AdminLogin.jsx
import { useState } from "react";
import styled from "styled-components";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// styled-components
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const AdminInput = styled.input`
  padding: 10px;
  font-size: 14px;
`;

const FetchButton = styled.button`
  padding: 10px 20px;
  background-color: #1e5acb;
  color: white;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const AdminLogin = ({ setAuth }) => {
  const [adminId, setAdminId] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkLogin = async () => {
    try {
      const docRef = doc(db, "adminConfig", adminId);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();

      if (!data) {
        setError("존재하지 않는 관리자 ID입니다.");
        return;
      }

      if (passwordInput === data.password) {
        setAuth(true);
        localStorage.setItem("admin-auth", "true");
        setError("");
        navigate("/admin/logs");
      } else {
        setError("비밀번호가 틀렸습니다.");
      }
    } catch (e) {
      console.error("로그인 오류", e);
      setError("오류가 발생했습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>관리자 로그인</Title>
      <InputRow>
        <AdminInput
          type="text"
          placeholder="아이디 입력"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
        <AdminInput
          type="password"
          placeholder="비밀번호 입력"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") checkLogin();
          }}
        />
        <FetchButton onClick={checkLogin}>로그인</FetchButton>
      </InputRow>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Wrapper>
  );
};

export default AdminLogin;
