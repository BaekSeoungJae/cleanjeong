import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
`;

const Footer = () => {
  return (
    <>
      <Container>footer</Container>
    </>
  );
};

export default Footer;
