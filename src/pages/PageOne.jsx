import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ad1 from "../img/006.png";
import Ad2 from "../img/007.png";
import Ad3 from "../img/008.png";
import Ad4 from "../img/002.jpg";
import Ad5 from "../img/003.jpg";
import Ad9 from "../img/009.png";
import Ad10 from "../img/010.png";
import Ad11 from "../img/011.png";
import Ad12 from "../img/012.png";
import Ad13 from "../img/013.png";
import Ad14 from "../img/014.png";
import Ad15 from "../img/015.png";
import G1 from "../img/G1.gif";
import G2 from "../img/G2.gif";
import m4 from "../img/mobile/002.jpg";
import m5 from "../img/mobile/003.jpg";
import m1 from "../img/mobile/006.png";
import m2 from "../img/mobile/007.png";
import m3 from "../img/mobile/008.png";
import m6 from "../img/mobile/009.png";
import m7 from "../img/mobile/010.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ContainerTop = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1920 / 346;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 30px;
    aspect-ratio: 768 / 853;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const ContainerM = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const ContainerGif = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageBoxGif = styled.div`
  width: 500px;
  height: 500px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ImageBoxGif2 = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 12%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-left: 0px;
    margin-top: 65px;
  }
`;

const ImageBoxM = styled.div`
  width: 1200px;
  height: 675px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 675;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    aspect-ratio: 768 / 644;
  }
`;

const ImageBox = styled.div`
  width: 1200px;
  height: 675px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 675;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    aspect-ratio: 540 / 940;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  .swiper-pagination {
    padding: 1px;
  }
  .swiper-pagination-bullet {
    background: #1e5acb; // 페이지네이션 점 색상 변경
    width: 10px;
    height: 10px;
    &:hover {
      opacity: 0.7;
    }
    @media (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #1e5acb; // 네비게이션 버튼 색상 변경
    &:hover {
      opacity: 0.6;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
const SlideM = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
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

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.overlay};
    transition: background-color 0.5s ease;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Slide2 = styled(SwiperSlide)`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.overlay};
    transition: background-color 0.5s ease;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const PageOne = () => {
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
    <>
      <ContainerTop>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SlideM imageurl={isMobile ? m4 : Ad4} />
          <SlideM imageurl={isMobile ? m5 : Ad5} />
        </StyledSwiper>
      </ContainerTop>
      <ContainerM>
        <ImageBoxM imageurl={isMobile ? m1 : Ad1} />
      </ContainerM>
      <Container2>
        <ImageBox imageurl={isMobile ? m2 : Ad2} />
      </Container2>
      <Container2>
        <ImageBox imageurl={isMobile ? m3 : Ad3} />
      </Container2>
      <ContainerGif>
        <ImageBoxGif imageurl={isMobile ? G1 : G1} />
        <ImageBoxGif2 imageurl={isMobile ? G2 : G2} />
      </ContainerGif>
      <Container>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={Ad9} />
          <Slide imageurl={Ad10} />
          <Slide imageurl={Ad11} />
          <Slide imageurl={Ad12} />
          <Slide imageurl={Ad13} />
          <Slide imageurl={Ad14} />
          <Slide imageurl={Ad15} />
          <Slide2 imageurl={m6} />
          <Slide2 imageurl={m7} />
        </StyledSwiper>
      </Container>
    </>
  );
};

export default PageOne;
