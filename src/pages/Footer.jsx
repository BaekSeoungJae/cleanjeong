import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../img/클린정로고.png";
import { Link } from "react-router-dom";
import PrivacyModal from "./PrivacyModal";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #1e5acb;
  min-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 0px;
  }
`;

const LogoSide = styled.div`
  width: 15%;
  height: 95%;
  @media (max-width: 768px) {
    width: 95%;
    height: 15%;
  }
`;

const HeaderLogo = styled(Link)`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const CleanLogo = styled.div`
  width: 120px;
  height: 120px;
  min-width: 120px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-radius: 100px;
  @media (max-width: 768px) {
    width: 40px;
    min-width: 40px;
    height: 40px;
  }
`;

const LeftSide = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-right: 1px solid white;
  @media (max-width: 768px) {
    width: 90%;
    height: 70%;
    border-right: none;
  }
`;

const PrivacyText = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: white;
`;

const LeftText = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: white;
`;

const LeftText2 = styled.div`
  width: 50%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: white;
  margin-top: 5px;
  border-top: 1px solid white;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RightSide = styled.div`
  width: 45%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
    height: 30px;
  }
`;

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false); // ← 상태 추가
  return (
    <>
      <Container>
        <LogoSide>
          <HeaderLogo to="/">
            <CleanLogo />
          </HeaderLogo>
        </LogoSide>
        <LeftSide>
          <LeftText>클린정</LeftText>
          <LeftText>대표 : 양찬요</LeftText>
          <LeftText>
            주소 : 세종특별시 새내10길 95, 205호 (세종파인시티)
          </LeftText>
          <LeftText>운영시간 : 연중무휴 24시간</LeftText>
          <LeftText>Email : cyy8300@naver.com</LeftText>
          <LeftText2>Copyright 2025. 클린정 Co. All rights reserved</LeftText2>
        </LeftSide>
        <RightSide>
          <PrivacyText onClick={() => setModalOpen(true)}>
            개인정보처리방침
          </PrivacyText>
        </RightSide>
      </Container>
      {isModalOpen && <PrivacyModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Footer;
