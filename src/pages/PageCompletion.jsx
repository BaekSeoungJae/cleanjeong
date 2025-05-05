import React from "react";
import styled from "styled-components";
import Ad1 from "../img/017.jpg";
import m1 from "../img/mobile/012.jpg";

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const ImageBox = styled.div`
  width: 1200px;
  height: 1999px;
  background-image: url(${Ad1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1200 / 1999; /* ✅ 비율 유지 */
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 666px;
    background-image: url(${m1});
  }
  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    aspect-ratio: 400 / 666; /* ✅ 비율 유지 */
  }
`;

const PageCompletion = () => {
  return (
    <>
      <Container>
        <ImageBox />
      </Container>
    </>
  );
};

export default PageCompletion;
