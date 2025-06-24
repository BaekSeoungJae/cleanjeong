import { useState } from "react";
import styled from "styled-components";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

const SearchRow = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 20px;
  font-size: 16px;
  background-color: #1e5acb;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3385dd;
  }
`;

const AdminNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (num) => {
    // 숫자만 추출
    const digits = num.replace(/\D/g, "");
    if (digits.length === 11) {
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
    return null;
  };

  const handleUpdate = async () => {
    if (!phoneNumber.trim()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      alert("잘못된 값입니다.");
      return;
    }

    const formatted = formatPhoneNumber(phoneNumber);
    if (!formatted) {
      alert("전화번호 형식이 올바르지 않습니다.");
      return;
    }

    try {
      const docRef = doc(db, "config", "contact");
      await updateDoc(docRef, { phone: formatted });
      alert(`전화번호가 성공적으로 변경되었습니다: ${formatted}`);
    } catch (error) {
      console.error("전화번호 업데이트 실패:", error);
      alert("전화번호 변경에 실패했습니다. 콘솔을 확인해주세요.");
    }
  };

  return (
    <Wrapper>
      <Title>휴대폰 번호 변경</Title>
      <SearchRow>
        <Input
          type="text"
          placeholder="새 전화번호 입력 (숫자만)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button onClick={handleUpdate}>변경</Button>
      </SearchRow>
    </Wrapper>
  );
};

export default AdminNumber;
