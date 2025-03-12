import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../img/클린정.png";
import Ad1 from "../img/예시1.jpg";
import Ad2 from "../img/예시3.jpg";
import MainImage from "../img/예시2.jpg";
import AppleImage from "../img/apple.png";
import GoogleImage from "../img/googleplay.png";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "./Header";

// 애니메이션 키프레임 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const HeaderLogo2 = styled.div`
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

const CleanLogo2 = styled.div`
  width: 65.63px;
  height: 60px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const MenuBtnDiv = styled.div`
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

const MainBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-image: url(${MainImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SameBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-color: whitesmoke;
`;

const MainText = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: black;
  margin-top: 250px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;

  @media (max-width: 768px) {
    margin-top: 200px;
  }
  h1 {
    height: 55px;
    font-size: 63px;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: -6px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    180deg,
    white 0%,
    white 59px,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
`;

const BtnDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 65px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
  }
`;

const AppleBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 4px;
  background-color: rgba(0, 12, 30, 0.8);
  color: rgb(255, 255, 255);
  font-size: 17px;
  padding: 11px 22px;
  border-radius: 8px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(68, 81, 100, 0.8);
    transition: background-color 0.3s ease;
  }
  @media (max-width: 768px) {
    width: 75%;
    margin-right: 0px;
  }
`;

const AppleLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${AppleImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const GoogleLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${GoogleImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const GoogleBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 4px;
  background-color: rgba(0, 12, 30, 0.8);
  color: rgb(255, 255, 255);
  font-size: 17px;
  padding: 11px 22px;
  border-radius: 8px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(68, 81, 100, 0.8);
    transition: background-color 0.3s ease;
  }
  @media (max-width: 768px) {
    width: 75%;
    margin-right: 0px;
    margin-top: 10px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  .swiper-pagination {
    padding: 1px;
  }
  .swiper-pagination-bullet {
    background: #8290ee; // 페이지네이션 점 색상 변경
    width: 0.5vw;
    height: 1vh;
    &:hover {
      opacity: 0.7;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #8290ee; // 네비게이션 버튼 색상 변경
    &:hover {
      opacity: 0.6;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 10px;
  /* transition: background-color 0.5s ease; */
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.overlay}; /* 다크 모드의 오버레이 색상 */
    transition: background-color 0.5s ease;
    pointer-events: none;
  }
`;

const CallButton = styled.a`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
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

const DownBtn = styled.div``;

const CleanJeong = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 메뉴 영역을 감지하는 ref

  // 스크롤
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <MenuBtnDiv>
        <div ref={menuRef}>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
        </div>
        <HeaderLogo2>
          <CleanLogo2 />
        </HeaderLogo2>
      </MenuBtnDiv>
      <div ref={menuRef}>
        <Header
          hasShadow={hasShadow}
          isOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
      <MainBody>
        <GradientOverlay />
        <MainText isVisible={isVisible}>
          <h1>쉽고 빠른</h1>
          <h1>청소 예약</h1>
          <h1>클린정</h1>
        </MainText>
        <BtnDiv isVisible={isVisible}>
          <AppleBtn>
            <AppleLogo></AppleLogo>App Store
          </AppleBtn>
          <GoogleBtn>
            <GoogleLogo></GoogleLogo>Google Play
          </GoogleBtn>
        </BtnDiv>
        <DownBtn></DownBtn>
      </MainBody>
      <SameBody></SameBody>
      <SameBody>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={Ad1} />
          <Slide imageurl={Ad2} />
        </StyledSwiper>
      </SameBody>
      <SameBody></SameBody>
      <CallButton href="tel:010-2554-6626">📞 전화상담</CallButton>
      <Footer />
      <Container />
    </>
  );
};

export default CleanJeong;
