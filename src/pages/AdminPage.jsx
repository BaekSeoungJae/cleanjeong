import { useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

// Firebase 설정
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

const DateRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const SearchRow = styled.div`
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

const SearchInput = styled.input`
  padding: 9px;
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

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 65%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Th = styled.th`
  background-color: #1e5acb;
  color: white;
  padding: 12px;
  font-size: 14px;
  word-break: break-word; /* 줄바꿈 강제 */
  max-width: 300px; /* 셀 최대 너비 제한 */
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  word-break: break-all;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const PageBtn = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: #1e5acb;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const AdminPage = () => {
  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const today = new Date();
  today.setHours(today.getHours() + 9);
  const todayStr = today.toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(todayStr);
  const [endDate, setEndDate] = useState(todayStr);

  const [auth, setAuth] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const itemsPerPage = 7;

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
        setError("");
      } else {
        setError("비밀번호가 틀렸습니다.");
      }
    } catch (e) {
      console.error("로그인 오류", e);
      setError("오류가 발생했습니다.");
    }
  };

  const fetchData = async () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);

    const q = query(
      collection(db, "ipLogs"),
      orderBy("timestamp", "desc"),
      where("timestamp", ">=", start),
      where("timestamp", "<=", end)
    );

    const snapshot = await getDocs(q);
    const rows = snapshot.docs.map((doc) => doc.data());
    setLogs(rows);
    setPage(1);
  };

  const filteredLogs = logs.filter((log) =>
    log.ip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const currentPageLogs = filteredLogs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // 🔐 로그인 전 화면
  if (!auth) {
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
  }

  // ✅ 로그인 후 메인 화면
  return (
    <Wrapper>
      <Title>방문자 IP 로그</Title>
      <SearchRow>
        <DateRow>
          <SearchInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <SearchInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </DateRow>
        <DateRow>
          <SearchInput
            type="text"
            placeholder="IP 검색"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
          />
          <FetchButton onClick={fetchData}>조회</FetchButton>
        </DateRow>
      </SearchRow>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>시간</Th>
              <Th>IP</Th>
              <Th>리퍼러</Th>
            </tr>
          </thead>
          <tbody>
            {currentPageLogs.length === 0 ? (
              <tr>
                <Td colSpan={4} style={{ textAlign: "center", color: "#999" }}>
                  조회 결과가 없습니다.
                </Td>
              </tr>
            ) : (
              currentPageLogs.map((log, idx) => (
                <tr key={idx}>
                  <Td>{log.timestamp.toDate().toLocaleString("ko-KR")}</Td>
                  <Td>{log.ip}</Td>
                  <Td>{log.referer}</Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableWrapper>
      <Pagination>
        <PageBtn disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          이전
        </PageBtn>
        <span>
          {page} / {totalPages}
        </span>
        <PageBtn
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          다음
        </PageBtn>
      </Pagination>
    </Wrapper>
  );
};

export default AdminPage;
