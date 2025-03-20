import React from "react";
import styled from "styled-components";
import Ad1 from "../img/016.png";
import m1 from "../img/mobile/011.png";

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
  background-image: url(${Ad1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-image: url(${m1});
    margin-top: 30px;
  }
`;

const PageShop = () => {
  return (
    <>
      <Container>
        <ImageBox />
      </Container>
    </>
  );
};

export default PageShop;
