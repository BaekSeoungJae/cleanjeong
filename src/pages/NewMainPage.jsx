import React, { useEffect, useState } from "react";
import styled from "styled-components";
import headerImg from "../img/main/headerImg.png";
import body01 from "../img/main/body01.png";
import body02 from "../img/main/body02.png";
import body03 from "../img/main/body03.png";
import body04 from "../img/main/body04.png";
import body05 from "../img/main/body05.png";
import body06 from "../img/main/body06.png";
import mHeader from "../img/main/mHeader.png";
import mbody01 from "../img/main/mbody01.png";
import mbody02 from "../img/main/mbody02.png";
import mbody03 from "../img/main/mbody03.png";
import mbody04 from "../img/main/mbody04.png";
import mbody05 from "../img/main/mbody05.png";
import mbody06 from "../img/main/mbody06.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainHeader = styled.div`
  width: 1200px;
  height: 550px;
  margin-top: 100px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 550;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 503px;
    margin-top: 60px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 503;
  }
`;

const MenuBtnDivPC = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 100;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuBtnDiv = styled.div`
  width: 1200px;
  height: 100px;
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 100;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 400px;
    height: 150px;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    width: 95%;
    height: auto;
    aspect-ratio: 400 / 150;
  }
`;

const MenuBtnL = styled.div`
  width: 540px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 100;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 75px;
    align-items: flex-end;
  }
  @media (max-width: 400px) {
    width: 95%;
    height: auto;
    aspect-ratio: 400 / 75;
  }
`;

const MenuBtnR = styled.div`
  width: 540px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 400px;
    height: 75px;
  }
  @media (max-width: 400px) {
    width: 95%;
    height: auto;
    aspect-ratio: 400 / 75;
  }
`;

const LinkBtn = styled(Link)`
  width: 150px;
  height: 55px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative; /* 🔹 추가: 자식의 absolute 위치 조정을 위해 */
  margin-right: 30px;
  background-color: #0a66e3;
  color: #ffffff;
  font-size: 15px;
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
    @media (max-width: 768px) {
      display: none;
    }
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
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:hover {
    background-color: rgba(10, 102, 227, 0.8);
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
  @media (max-width: 1200px) {
    width: 120px;
    height: 45px;
    margin-right: 20px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
    margin-right: 20px;
    padding: 5px 5px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

const Body1 = styled.div`
  width: 1200px;
  height: 2491px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 2491; /* ✅ 비율 유지 */
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 722px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 722;
  }
`;

const Body2 = styled.div`
  width: 1200px;
  height: 2137px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 2137; /* ✅ 비율 유지 */
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 794px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 794;
  }
`;

const Body3 = styled.div`
  width: 1200px;
  height: 3753px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 3753;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 1128px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 1128;
  }
`;

const Body4 = styled.div`
  width: 1200px;
  height: 1013px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 1013;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 1479px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 1479;
  }
`;

const Body5 = styled.div`
  width: 1200px;
  height: 2861px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 2861;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 2613px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 2613;
  }
`;

const Body6 = styled.div`
  width: 1200px;
  height: 1997px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 1997;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 3193px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 3193;
  }
`;

const NewMainPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 기본값 설정
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 화면 크기 체크
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <MainHeader imageurl={isMobile ? mHeader : headerImg}></MainHeader>
      <MenuBtnDivPC>
        <LinkBtn to="/intro">회사 소개</LinkBtn>
        <LinkBtn to="/ex">청소 사례</LinkBtn>
        <LinkBtn to="/houseclean">입주ㆍ거주 청소</LinkBtn>
        <LinkBtn to="/completion">준공 청소</LinkBtn>
        <LinkBtn to="/special">특수 청소</LinkBtn>
        <LinkBtn to="/shop">상가 청소</LinkBtn>
      </MenuBtnDivPC>
      <MenuBtnDiv>
        <MenuBtnL>
          <LinkBtn to="/intro">회사 소개</LinkBtn>
          <LinkBtn to="/ex">청소 사례</LinkBtn>
          <LinkBtn to="/houseclean">입주ㆍ거주 청소</LinkBtn>
        </MenuBtnL>
        <MenuBtnR>
          <LinkBtn to="/completion">준공 청소</LinkBtn>
          <LinkBtn to="/special">특수 청소</LinkBtn>
          <LinkBtn to="/shop">상가 청소</LinkBtn>
        </MenuBtnR>
      </MenuBtnDiv>
      <Body1 imageurl={isMobile ? mbody01 : body01}></Body1>
      <Body2 imageurl={isMobile ? mbody02 : body02}></Body2>
      <Body3 imageurl={isMobile ? mbody03 : body03}></Body3>
      <Body4 imageurl={isMobile ? mbody04 : body04}></Body4>
      <Body5 imageurl={isMobile ? mbody05 : body05}></Body5>
      <Body6 imageurl={isMobile ? mbody06 : body06}></Body6>
    </Container>
  );
};

export default NewMainPage;
