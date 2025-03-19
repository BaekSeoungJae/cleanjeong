import React from "react";
import styled from "styled-components";
import Ad1 from "../img/006.png";
import Ad2 from "../img/007.png";
import Ad3 from "../img/008.png";
import Ad4 from "../img/002.png";
import Ad5 from "../img/003.png";
import Ad9 from "../img/009.png";
import Ad10 from "../img/010.png";
import Ad11 from "../img/011.png";
import Ad12 from "../img/012.png";
import Ad13 from "../img/013.png";
import Ad14 from "../img/014.png";
import Ad15 from "../img/015.png";
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
`;

const ImageBox = styled.div`
  width: 90%;
  height: 90%;
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
  width: 95%;
  height: 80%;
  /* border-radius: 10px; */
  margin-top: 100px;
  .swiper-pagination {
    padding: 1px;
  }
  .swiper-pagination-bullet {
    background: #1e5acb; // 페이지네이션 점 색상 변경
    width: 0.5vw;
    height: 1vh;
    &:hover {
      opacity: 0.7;
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

const PageShop = () => {
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
          <Slide imageurl={Ad4} />
          <Slide imageurl={Ad5} />
        </StyledSwiper>
      </Container>
      <Container>
        <ImageBox imageurl={Ad1} />
      </Container>
      <Container>
        <ImageBox imageurl={Ad2} />
      </Container>
      <Container>
        <ImageBox imageurl={Ad3} />
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
          <Slide imageurl={Ad9} />
          <Slide imageurl={Ad10} />
          <Slide imageurl={Ad11} />
          <Slide imageurl={Ad12} />
          <Slide imageurl={Ad13} />
          <Slide imageurl={Ad14} />
          <Slide imageurl={Ad15} />
        </StyledSwiper>
      </Container>
    </>
  );
};

export default PageShop;
