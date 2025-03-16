import React from "react";
import styled from "styled-components";
import Ad1 from "../img/예시1.jpg";
import Ad2 from "../img/예시3.jpg";
import Intro1 from "../img/intro1.png";
import Intro2 from "../img/intro2.png";
import Intro3 from "../img/intro3.png";
import Intro4 from "../img/intro4.png";
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
  @media (max-width: 768px) {
    height: 45vh;
  }
`;

const ImageBox = styled.div`
  width: 80%;
  height: 75%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  height: 80%;
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
const Introduce = () => {
  return (
    <>
      <Container>
        <ImageBox imageurl={Intro1} />
      </Container>
      <Container>
        <ImageBox imageurl={Intro2} />
      </Container>
      <Container>
        <ImageBox imageurl={Intro3} />
      </Container>
      <Container>
        <ImageBox imageurl={Intro4} />
      </Container>
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
          <Slide imageurl={Ad1} />
          <Slide imageurl={Ad2} />
        </StyledSwiper>
      </Container>
    </>
  );
};

export default Introduce;
