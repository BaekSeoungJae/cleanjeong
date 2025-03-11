import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../img/클린정.png";
import Ad1 from "../img/예시1.jpg";
import Ad2 from "../img/예시2.jpg";
import MainImage from "../img/예시2.jpg";
import AppleImage from "../img/apple.png";
import GoogleImage from "../img/googleplay.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

const Header = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
  border-color: ${({ hasShadow }) => (hasShadow ? "#e6e6e6" : "transparent")};
`;

const HeaderWrap = styled.div`
  width: 1140px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
`;

const HeaderLogo = styled.div`
  width: 76px;
  height: 100%;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

const HeaderMenu = styled.div`
  width: 949px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuBox = styled.div`
  padding: 0 8px;
  white-space: nowrap;
`;

const MenuName = styled.div`
  padding: 12px 10px;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  color: #4e5968;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;

  &:hover {
    color: #2c57e4;
  }
`;

const LangBox = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto 0 0;
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

  h1 {
    height: 55px;
    font-size: 63px;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: -6px;
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
    pointer-events: none; /* Ensure it does not interfere with mouse events */
  }
`;

const DownBtn = styled.div``;

const TossClone = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      <Header hasShadow={hasShadow}>
        <HeaderWrap>
          <HeaderBox>
            <HeaderLogo>
              <CleanLogo></CleanLogo>
            </HeaderLogo>
            <HeaderMenu>
              <MenuBox>
                <MenuName>생활 청소</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>입주 청소</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>예약 하기</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>자주 묻는 질문</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>고객 지원</MenuName>
              </MenuBox>
              <MenuBox>
                <MenuName>업무 안내</MenuName>
              </MenuBox>
              <MenuBox>
                <LangBox>
                  <MenuName>KOR</MenuName>
                  <span class="css-9hfgjx">|</span>
                  <MenuName>ENG</MenuName>
                </LangBox>
              </MenuBox>
            </HeaderMenu>
          </HeaderBox>
        </HeaderWrap>
      </Header>

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
      <MainBody>
        <GradientOverlay />
        <MainText isVisible={isVisible}>
          <h1>쉽고 빠른 청소 예약은</h1>
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
      <SameBody></SameBody>
      <Container />
    </>
  );
};

export default TossClone;
