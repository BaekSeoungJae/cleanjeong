import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ex1 from "../img/ex/001.png";
import ex2 from "../img/ex/002.png";
import ex3 from "../img/ex/003.png";
import ex4 from "../img/ex/004.png";
import ex5 from "../img/ex/005.png";
import ex6 from "../img/ex/006.png";
import ex7 from "../img/ex/007.png";
import ex8 from "../img/ex/008.png";
import ex9 from "../img/ex/009.png";
import ex10 from "../img/ex/010.png";
import ex11 from "../img/ex/011.png";
import ex12 from "../img/ex/012.png";
import ex13 from "../img/ex/013.png";
import ex14 from "../img/ex/014.png";
import ex15 from "../img/ex/015.png";
import ex16 from "../img/ex/016.png";
import ex17 from "../img/ex/017.png";
import ex18 from "../img/ex/018.png";
import ex19 from "../img/ex/019.png";
import ex20 from "../img/ex/020.png";
import ex21 from "../img/ex/021.png";
import ex22 from "../img/ex/022.png";
import ex23 from "../img/ex/023.png";
import ex24 from "../img/ex/024.png";
import ex25 from "../img/ex/025.png";
import ex26 from "../img/ex/026.png";
import ex27 from "../img/ex/027.png";
import ex28 from "../img/ex/028.png";
import ex29 from "../img/ex/029.png";
import ex30 from "../img/ex/030.png";
import ex31 from "../img/ex/031.png";
import ex32 from "../img/ex/032.png";
import ex33 from "../img/ex/033.png";
import ex34 from "../img/ex/034.png";
import ex35 from "../img/ex/035.png";
import ex36 from "../img/ex/036.png";
import ex37 from "../img/ex/037.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const StyledSwiper = styled(Swiper)`
  width: 95%;
  height: 85%;
  border-radius: 10px;
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

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 10px;
  /* transition: background-color 0.5s ease; */
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
const PageEx = () => {
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
      <Container>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={isMobile ? ex1 : ex1} />
          <Slide imageurl={isMobile ? ex2 : ex2} />
          <Slide imageurl={isMobile ? ex3 : ex3} />
          <Slide imageurl={isMobile ? ex4 : ex4} />
          <Slide imageurl={isMobile ? ex5 : ex5} />
          <Slide imageurl={isMobile ? ex6 : ex6} />
          <Slide imageurl={isMobile ? ex7 : ex7} />
          <Slide imageurl={isMobile ? ex8 : ex8} />
          <Slide imageurl={isMobile ? ex9 : ex9} />
          <Slide imageurl={isMobile ? ex10 : ex10} />
          <Slide imageurl={isMobile ? ex11 : ex11} />
          <Slide imageurl={isMobile ? ex12 : ex12} />
          <Slide imageurl={isMobile ? ex13 : ex13} />
        </StyledSwiper>
      </Container>
      <Container>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={isMobile ? ex14 : ex14} />
          <Slide imageurl={isMobile ? ex15 : ex15} />
          <Slide imageurl={isMobile ? ex16 : ex16} />
          <Slide imageurl={isMobile ? ex17 : ex17} />
          <Slide imageurl={isMobile ? ex18 : ex18} />
          <Slide imageurl={isMobile ? ex19 : ex19} />
          <Slide imageurl={isMobile ? ex20 : ex20} />
          <Slide imageurl={isMobile ? ex21 : ex21} />
          <Slide imageurl={isMobile ? ex22 : ex22} />
          <Slide imageurl={isMobile ? ex23 : ex23} />
          <Slide imageurl={isMobile ? ex24 : ex24} />
          <Slide imageurl={isMobile ? ex25 : ex25} />
          <Slide imageurl={isMobile ? ex26 : ex26} />
        </StyledSwiper>
      </Container>
      <Container>
        <StyledSwiper
          key="swiper"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={isMobile ? ex27 : ex27} />
          <Slide imageurl={isMobile ? ex28 : ex28} />
          <Slide imageurl={isMobile ? ex29 : ex29} />
          <Slide imageurl={isMobile ? ex30 : ex30} />
          <Slide imageurl={isMobile ? ex31 : ex31} />
          <Slide imageurl={isMobile ? ex32 : ex32} />
          <Slide imageurl={isMobile ? ex33 : ex33} />
          <Slide imageurl={isMobile ? ex34 : ex34} />
          <Slide imageurl={isMobile ? ex35 : ex35} />
          <Slide imageurl={isMobile ? ex36 : ex36} />
          <Slide imageurl={isMobile ? ex37 : ex37} />
        </StyledSwiper>
      </Container>
    </>
  );
};

export default PageEx;
