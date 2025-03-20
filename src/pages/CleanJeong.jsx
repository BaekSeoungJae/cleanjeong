import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MainImage from "../img/메인배경.png";
import MainImageM from "../img/메인배경M.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import THEmpgtM from "../fonts/THEmpgtM.otf"; // 폰트 파일 import
import THEmpgtB from "../fonts/THEmpgtM.otf"; // 폰트 파일 import
import THEmpgtL from "../fonts/THEmpgtL.otf"; // 폰트 파일 import
import SCDream3 from "../fonts/SCDream3.otf"; // 폰트 파일 import
import SCDream6 from "../fonts/SCDream6.otf"; // 폰트 파일 import

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
  width: 100%;
  height: 100vh;
  min-height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${MainImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    min-height: 600px;
    justify-content: center;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      url(${MainImageM});
  }
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
  margin-top: 400px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;

  @media (max-width: 768px) {
    height: 60%;
    margin-top: 0px;
    justify-content: flex-end;
  }
`;

const Title1 = styled.h1`
  @font-face {
    font-family: "THEmpgtM";
    src: url(${THEmpgtB}) format("opentype");
  }
  font-family: "THEmpgtM";
  height: 35px;
  font-size: 48px;
  letter-spacing: -7px;
  transform: scaleY(0.9);
  transform: scaleX(0.95);
  font-weight: 500;
  color: #585b5c;
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); 그림자 설정 */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 25px;
    letter-spacing: -3px;
  }
`;

const Title2 = styled.h1`
  @font-face {
    font-family: "THEmpgtL";
    src: url(${THEmpgtL}) format("opentype");
  }

  font-family: "THEmpgtL";
  height: 10px;
  font-size: 23px;
  margin-top: 50px;
  letter-spacing: -3px;
  transform: scaleY(0.9);
  font-weight: 300;
  color: #2d2e2e;

  @media (max-width: 768px) {
    width: 100%;
    height: 15px;
    font-size: 15px;
  }
`;
const Title3 = styled.h1`
  @font-face {
    font-family: "THEmpgtL";
    src: url(${THEmpgtL}) format("opentype");
  }

  font-family: "THEmpgtL";
  height: 20px;
  font-size: 29px;
  letter-spacing: -3px;
  transform: scaleY(0.9);
  font-weight: 300;
  color: #2d2e2e;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    align-items: center;
    justify-content: center;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1s ease-out;
  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
    height: 12%;
    margin-top: 50px;
    gap: 15px; /* ✅ 추가: 버튼 간 간격 조절 */
  }
`;

const LinkBtn = styled(Link)`
  width: 138px;
  min-width: 135px;
  height: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative; /* 🔹 추가: 자식의 absolute 위치 조정을 위해 */
  margin-right: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #5f5f5f;
  font-size: 18px;
  padding: 11px 22px;
  border-radius: 17px;
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  /* 🔹 화살표 기본적으로 숨기기 */
  &::after,
  &::before {
    opacity: 0; /* 기본적으로 안 보이게 설정 */
    transition: opacity 0.2s ease;
  }
  &:hover::after,
  &:hover::before {
    opacity: 1;
    background-color: #000000; /* 선의 색상 */
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 14px; /* 선의 위치 */
    left: 50%; /* 가운데 정렬 */
    transform: translateX(-50%);
    width: 70px; /* 선의 길이 */
    height: 1px; /* 선의 두께 */
    background-color: #919191; /* 선의 색상 */
    border-radius: 2px; /* 선 끝부분 둥글게 */
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 20px; /* 가로선과 같은 위치 */
    left: calc(50% + 25px); /* 가로선 끝에 맞추기 */
    width: 12px; /* 대각선 길이 */
    height: 1px; /* 두께 */
    background-color: #919191; /* 선의 색상 */
    transform: rotate(30deg); /* 오른쪽 아래에서 오른쪽 위 방향 */
    transform-origin: left center; /* 회전 중심을 왼쪽 끝으로 설정 */
    border-radius: 2px;
  }
  &:hover {
    background-color: rgba(180, 180, 180, 0.8);
    color: rgba(0, 0, 0);
    transition: background-color 1s ease;
    transition: color 0.2s ease;
    transform: scale(1.1);
    transition: transform 0.4s ease;
  }
  /* 마지막 요소만 margin-right 제거 */
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    width: 65px;
    min-width: 80px;
    height: 30px;
    font-size: 11px;
    margin-right: 0px;
    border-radius: 10px;
    padding: 5px 5px;
  }
`;

const TopDiv = styled.div`
  width: 80%;
  height: 88%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(110, 138, 165);
  @media (max-width: 768px) {
    display: none;
  }
`;

const LefttSide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const LeftText = styled.div`
  width: 70%;
  min-width: 186px;
  height: 40%;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    font-size: 14px;
    min-width: 186px;
  }
`;
const LeftNum = styled.div`
  @font-face {
    font-family: "SCDream6";
    src: url(${SCDream6}) format("opentype");
  }

  font-family: "SCDream6";
  width: 70%;
  min-width: 186px;
  height: 50%;
  font-size: 23px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  color: white;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;
const MainNum = styled.div`
  @font-face {
    font-family: "SCDream6";
    src: url(${SCDream6}) format("opentype");
  }

  font-family: "SCDream6";
  width: 80%;
  height: 50%;
  font-size: 34px;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;
const MidLine = styled.div`
  width: 1%;
  height: 40%;
  border-right: 1px solid white;
  @media (max-width: 1200px) {
    width: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightLeft = styled.div`
  width: 35%;
  min-width: 332px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const RightSide = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightText = styled.div`
  @font-face {
    font-family: "SCDream3";
    src: url(${SCDream3}) format("opentype");
  }

  font-family: "SCDream3";
  width: 90%;
  height: 17%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 11px;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 90%;
    height: 33%;
    font-size: 10px;
    align-items: flex-start;
    justify-content: flex-start;
  }
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
          <MainTextDiv isVisible={isVisible}>
            <Title1>'깨끗함'도 선택할 수 있다면?</Title1>
            <Title2>먼지 하나 없는 맑은 공간, </Title2>
            <Title3>그곳에 고요한 행복이 흐릅니다.</Title3>
          </MainTextDiv>
          <BtnDiv isVisible={isVisible}>
            <LinkBtn to="/intro">회사소개</LinkBtn>
            <LinkBtn to="/houseclean">입주ㆍ거주 청소</LinkBtn>
            <LinkBtn to="/completion">준공 청소</LinkBtn>
            <LinkBtn to="/special">특수 청소</LinkBtn>
            <LinkBtn to="/shop">상가 청소</LinkBtn>
          </BtnDiv>
        </TopDiv>
        <BottomDiv>
          <LefttSide>
            <LeftText>24시간 연중무휴 상담가능</LeftText>
            <LeftNum>당일 예약도 OK!</LeftNum>
          </LefttSide>
          <MidLine />
          <RightLeft>
            <MainNum>010-6754-6626</MainNum>
          </RightLeft>
          <RightSide>
            <RightText>
              주소 : 세종시 조치원읍 새내10길 95, 205호(세종파인시티)
            </RightText>
            <RightText>전화번호 : 010-6754-6626</RightText>
            <RightText>대표 : 양찬요</RightText>
            <RightText>이메일 : cyy8300@naver.com</RightText>
            <RightText>FAX : 0303-3440-2267</RightText>
          </RightSide>
        </BottomDiv>
      </MainBody>
    </Container>
  );
};

export default CleanJeong;
