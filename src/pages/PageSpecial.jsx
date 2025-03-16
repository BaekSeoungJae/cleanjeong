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

const PageSpecial = () => {
  return (
    <>
      <Container>특별 청소</Container>
    </>
  );
};

export default PageSpecial;
