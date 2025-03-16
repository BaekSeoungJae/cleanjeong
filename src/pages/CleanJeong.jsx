import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MainImage from "../img/메인배경.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

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
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainBody = styled.div`
  width: 85%;
  height: 100vh;
  min-height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${MainImage});
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

const MainTextDiv = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: #393939;
  margin-top: 100px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;

  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;

const Title1 = styled.h1`
  font-family: "THE명품명조M", serif;
  height: 35px;
  font-size: 35px;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Title2 = styled.h1`
  font-family: "THE명품명조M", serif;
  height: 35px;
  font-size: 25px;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Title3 = styled.h1`
  font-family: "THE명품명조M", serif;
  height: 35px;
  font-size: 30px;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 350px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
  }
`;

const LinkBtn = styled(Link)`
  width: 138px;
  min-width: 135px;
  height: 55px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgb(0, 0, 0);
  font-size: 18px;
  padding: 11px 22px;
  border-radius: 17px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(180, 180, 180, 0.8);
    transition: background-color 1s ease;
    transform: scale(1.1);
    transition: transform 0.4s ease;
  }
  /* 마지막 요소만 margin-right 제거 */
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-top: 30px;
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

const TopDiv = styled.div`
  width: 80%;
  height: 88%;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(110, 138, 165);
`;

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
    <Container>
      <MainBody>
        <TopDiv>
          <BtnDiv isVisible={isVisible}>
            <LinkBtn to="/intro">회사소개</LinkBtn>
            <LinkBtn to="/houseclean">입주ㆍ거주 청소</LinkBtn>
            <LinkBtn to="/completion">준공 청소</LinkBtn>
            <LinkBtn to="/special">특수 청소</LinkBtn>
            <LinkBtn to="/shop">상가 청소</LinkBtn>
          </BtnDiv>
          <MainTextDiv isVisible={isVisible}>
            <Title1>깨끗함도 선택할 수 있다면?</Title1>
            <Title2>먼지 하나 없는 맑은 공간, </Title2>
            <Title3>그곳에 고요한 행복이 흐릅니다.</Title3>
          </MainTextDiv>
        </TopDiv>
        <BottomDiv></BottomDiv>
      </MainBody>
      <SameBody>1</SameBody>
      <SameBody>2</SameBody>
      <SameBody></SameBody>
      <CallButton href="tel:010-2554-6626">📞 전화상담</CallButton>
    </Container>
  );
};

export default CleanJeong;
