// src/pages/admin/AdminLayout.jsx
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminLogin from "./AdminLogin";

const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 100%;
  height: 60px;
  gap: 10px;
  background-color: #1e5acb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const MenuItem = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

const LogOutBtn = styled.div`
  width: 80px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e74f21;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useState(() => {
    return localStorage.getItem("admin-auth") === "true";
  });

  useEffect(() => {
    // 로그인 안됐으면 강제적으로 index로
    if (!auth && location.pathname !== "/admin") {
      navigate("/admin");
    }
  }, [auth, location.pathname, navigate]);

  if (!auth) {
    return <AdminLogin setAuth={setAuth} />;
  }

  return (
    <LayoutWrapper>
      <Sidebar>
        <MenuItem onClick={() => navigate("/admin/logs")}>IP 수집</MenuItem>
        <MenuItem onClick={() => navigate("/admin/numbers")}>
          번호 관리
        </MenuItem>
        {/* <MenuItem onClick={() => navigate("/admin/numbers")}>배너 관리</MenuItem> */}
        <LogOutBtn
          onClick={() => {
            localStorage.removeItem("admin-auth");
            setAuth(false);
            navigate("/admin");
          }}
        >
          로그아웃
        </LogOutBtn>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </LayoutWrapper>
  );
};

export default AdminLayout;
