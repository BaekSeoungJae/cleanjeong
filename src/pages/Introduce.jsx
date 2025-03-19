import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Ad1 from "../img/004.png";
import Ad2 from "../img/005.png";
import m1 from "../img/mobile/004.png";
import m2 from "../img/mobile/005.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 95%;
  height: 90%;
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
  }
  @media (max-width: 768px) {
    margin-top: 10px;
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
const Introduce = () => {
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
          autoplay={{ delay: 5000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <Slide imageurl={isMobile ? m1 : Ad1} />
          <Slide imageurl={isMobile ? m2 : Ad2} />
        </StyledSwiper>
      </Container>
    </>
  );
};

export default Introduce;
