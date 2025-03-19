import React from "react";
import styled from "styled-components";
import Ad1 from "../img/017.png";

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
  width: 100%;
  height: 100%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;
const PageCompletion = () => {
  return (
    <>
      <Container>
        <ImageBox imageurl={Ad1} />
      </Container>
    </>
  );
};

export default PageCompletion;
