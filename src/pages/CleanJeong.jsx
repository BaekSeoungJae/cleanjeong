import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MainImage from "../img/예시2.jpg";
import AppleImage from "../img/apple.png";
import GoogleImage from "../img/googleplay.png";
import Footer from "./Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 첫 화면 로드 시 애니메이션 실행
    setIsVisible(true);

    const handleScroll = () => {
      // 스크롤이 발생하면 `isVisible` 상태를 유지
      if (window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
      <SameBody>1</SameBody>
      <SameBody>2</SameBody>
      <SameBody></SameBody>
      <CallButton href="tel:010-2554-6626">📞 전화상담</CallButton>
      <Footer />
      <Container />
    </>
  );
};

export default CleanJeong;
