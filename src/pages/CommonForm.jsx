import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../img/클린정.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineUp } from "react-icons/ai";
import BIcon from "../img/nblogimg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import PopupAd from "./PopupAd";
import FirebaseForm from "../components/FirebaseForm";

const Background = styled.div`
  width: 100%;
  min-height: 950px;
  overflow-x: hidden;
  @media (max-width: 768px) {
    min-height: 600px;
    z-index: 9;
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
    transform: translateX(-50%);
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
    justify-content: space-between;
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
    align-self: flex-start;
  }
`;

const BlogButtonM = styled.a`
  display: none;
  position: fixed;
  width: 49px;
  height: 49px;
  align-items: center;
  justify-content: center;
  bottom: 75px;
  right: 25px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color, width 0.3s ease;
  z-index: 9;

  &:hover {
    background-color: #02883e;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BlogButton = styled.a`
  display: flex;
  position: fixed;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  bottom: 35%;
  right: 1%;
  background-color: #03c75a;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color, width 0.3s ease;
  z-index: 9;

  &:hover {
    background-color: #02883e;
    width: 200px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CallButtonPC = styled.a`
  display: flex;
  position: fixed;
  width: 150px;
  height: 55px;
  align-items: center;
  justify-content: center;
  bottom: 42%;
  right: 1%;
  background-color: #2c57e4;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color, width 0.3s ease;
  cursor: pointer;
  z-index: 9;

  &:hover {
    background-color: #1a3ca1;
    width: 200px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CallButton = styled.a`
  display: none;
  position: fixed;
  width: 49px;
  height: 49px;
  bottom: 130px;
  right: 25px;
  background-color: #2c57e4;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #1a3ca1;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/*  TOP 버튼 스타일 */
const TopButton = styled.button`
  width: 50px;
  height: 50px;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  bottom: 80px;
  right: 50px;
  background-color: #1e5acb;
  color: white;
  border: 1px solid white;
  font-size: 15px;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #5e7ee0;
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 30px;
    right: 20px;
    font-size: 11px;
  }
`;

const CommonForm = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 메뉴 영역을 감지하는 ref
  const location = useLocation(); // 🔹 현재 페이지의 경로 감지
  const [showTopButton, setShowTopButton] = useState(false); // 🔹 TOP 버튼 상태 추가
  const [hovered, setHovered] = useState(false); //전화버튼 호버 상태
  const [bHovered, setBhovered] = useState(false); //블로그버튼 호버 상태

  // 페이지 이동 시 최상단으로 스크롤 이동
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

  // 스크롤 이벤트 추가 → 일정 거리 이상 스크롤하면 TOP 버튼 표시
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true); // 스크롤 300px 이상 시 버튼 보이기
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // TOP 버튼 클릭 시 최상단 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("010-7977-0204").then(() => {
      toast.success("전화번호가 복사되었습니다.", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        icon: <FaCheckCircle color="#2c57e4" />,
      });
    });
  };

  return (
    <Background>
      <FirebaseForm />
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
      <BlogButton
        onMouseEnter={() => setBhovered(true)}
        onMouseLeave={() => setBhovered(false)}
        href="https://blog.naver.com/cleanjeong-official"
        target="_blank"
        rel="noopener noreferrer"
        title="클린정 블로그 이동"
      >
        {bHovered ? "블로그 이동 클릭" : "N 블로그"}
      </BlogButton>
      <BlogButtonM
        href="https://blog.naver.com/cleanjeong-official"
        target="_blank"
        rel="noopener noreferrer"
        imageurl={BIcon}
      />
      <CallButtonPC
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCopy}
      >
        {hovered ? "010-7977-0204" : "📞 전화상담"}
      </CallButtonPC>
      <CallButton href="tel:010-7977-0204">📞</CallButton>
      <TopButton show={showTopButton} onClick={scrollToTop}>
        <AiOutlineUp size={window.innerWidth > 768 ? 21 : 18} />
      </TopButton>
      <PopupAd />
      <ToastContainer limit={3} />
    </Background>
  );
};

export default CommonForm;
