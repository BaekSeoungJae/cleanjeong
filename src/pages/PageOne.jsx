import React from "react";
import styled from "styled-components";
import Ad1 from "../img/006.png";
import Ad2 from "../img/007.png";
import Ad3 from "../img/008.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 100px;
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

const PageShop = () => {
  return (
    <>
      <Container>
        <ImageBox imageurl={Ad1} />
      </Container>
      <Container>
        <ImageBox imageurl={Ad2} />
      </Container>
      <Container>
        <ImageBox imageurl={Ad3} />
      </Container>
    </>
  );
};

export default PageShop;
