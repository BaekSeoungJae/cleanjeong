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
  width: 100%;
  height: 100vh;
  min-width: 1200px;
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
  margin-top: 130px;
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
  font-size: 20px;
  margin-top: 50px;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const Title3 = styled.h1`
  font-family: "THE명품명조M", serif;
  height: 35px;
  font-size: 25px;
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

const LefttSide = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LeftText = styled.div`
  width: 90%;
  height: 40%;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
`;
const LeftNum = styled.div`
  width: 90%;
  height: 50%;
  font-size: 27px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  color: white;
`;

const MidLine = styled.div`
  width: 5%;
  height: 40%;
  border-right: 1px solid white;
`;

const RightSide = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RightText = styled.div`
  width: 90%;
  height: 17%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  font-size: 11px;
  color: #dbdbdb;
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
        <BottomDiv>
          <LefttSide>
            <LeftText>연중무휴 지금 신청하기</LeftText>
            <LeftNum>010-6754-6626</LeftNum>
          </LefttSide>
          <MidLine />
          <RightSide>
            <RightText>
              신혼희망타운은 혼인신고 7년 이내의 부부로 입주 모집 공고일 기준
              7년 이내면 가능합니다
            </RightText>
            <RightText>
              예비 신혼부부도 청약 시 접수하고 모집공고 가능하며, 1년이내에
              가족관계증명서를 통한 증명이 필요합니다
            </RightText>
            <RightText>
              소득기준은 도시근로자 월 평균소득 맞벌이 130% 혼벌이 120%로 17년도
              3인 기준으로 650만원 미만인 경우 가능합니다
            </RightText>
          </RightSide>
        </BottomDiv>
      </MainBody>
      <SameBody>1</SameBody>
      <SameBody>2</SameBody>
      <SameBody></SameBody>
      <CallButton href="tel:010-2554-6626">📞 전화상담</CallButton>
    </Container>
  );
};

export default CleanJeong;
