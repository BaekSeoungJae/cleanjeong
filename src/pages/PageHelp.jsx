import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Text = styled.div`
  font-size: 12px;
  color: #000000;
`;

const PageHelp = () => {
  return (
    <>
      <Container>
        <Text>문의하기 기능이 준비중입니다</Text>
      </Container>
    </>
  );
};

export default PageHelp;
