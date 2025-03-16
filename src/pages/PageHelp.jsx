import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

const PageHelp = () => {
  return (
    <>
      <Container>문의 하기</Container>
    </>
  );
};

export default PageHelp;
