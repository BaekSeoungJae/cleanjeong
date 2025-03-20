import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../img/클린정.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const Background = styled.div`
  min-height: 950px;
  @media (max-width: 768px) {
    min-height: 600px;
  }
`;

const HeaderLogo = styled(Link)`
  width: 76px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /* 정중앙 정렬 */
  }
`;

const CleanLogo = styled.div`
  width: 65.63px;
  height: 60px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const MenuBtnDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
    align-items: center;
    justify-content: space-between; /* 왼쪽과 중앙 정렬을 위해 변경 */
    position: fixed;

    background-color: white;
    z-index: 10;
    border-bottom: 1px solid transparent;
    border-color: #e6e6e6;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    display: block;
    align-self: flex-start; /* 왼쪽 정렬 */
  }
`;

const CallButton = styled.a`
  display: none;
  position: fixed;
  bottom: 25px;
  left: 50%; /* 가운데 정렬 */
  transform: translateX(-50%); /* 정확한 중앙 정렬 */
  background-color: #2c57e4;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 18px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #1a3ca1;
  }

  @media (max-width: 768px) {
    display: flex; /* 모바일 화면에서만 보이도록 설정 */
    align-items: center;
    justify-content: center;
  }
`;

const CommonForm = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 메뉴 영역을 감지하는 ref
  const location = useLocation(); // 🔹 현재 페이지의 경로 감지

  // 📌 페이지 이동 시 최상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 이동
  }, [location.pathname]); // 🔹 경로가 변경될 때마다 실행

  // 메뉴 바깥 클릭 감지 (단, 메뉴 내부 클릭 시 닫히지 않도록)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <Background>
      <MenuBtnDiv>
        <div ref={menuRef}>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
        </div>
        <HeaderLogo to="/">
          <CleanLogo />
        </HeaderLogo>
      </MenuBtnDiv>
      <div ref={menuRef}>
        <Header isOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Outlet />
      <Footer />
      <CallButton href="tel:010-6754-6626">📞 전화상담</CallButton>
    </Background>
  );
};

export default CommonForm;
