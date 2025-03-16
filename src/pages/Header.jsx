import React from "react";
import styled from "styled-components";
import Logo from "../img/클린정.png";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  border-bottom: 1px solid
    ${({ hasShadow }) => (hasShadow ? "#e6e6e6" : "transparent")};
  transition: border-color 0.2s ease;

  @media (max-width: 768px) {
    width: 200px;
    height: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const HeaderWrap = styled.div`
  width: 1140px;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const HeaderBox = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HeaderLogo = styled.div`
  width: 76px;
  height: 100%;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    margin-right: 0;
    justify-content: flex-end;
  }
`;

const CleanLogo = styled(Link)`
  width: 65.63px;
  height: 60px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderMenu = styled.div`
  width: 949px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;

const MenuBox = styled.div`
  padding: 0 8px;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const MenuBox2 = styled.div`
  padding: 0 8px;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const MenuName = styled(Link)`
  padding: 12px 10px;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  color: #4e5968;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;

  &:hover {
    color: #2c57e4;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const LangBox = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto 0 0;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    display: block;
    align-self: flex-start; /* 왼쪽 정렬 */
  }
`;

const Header = ({ hasShadow, isOpen, setMenuOpen }) => {
  return (
    <HeaderContainer hasShadow={hasShadow} isOpen={isOpen}>
      <HeaderWrap>
        <HeaderBox>
          <HeaderLogo>
            <CleanLogo to="/" />
            {/* 메뉴 버튼 (클릭 시 메뉴 열기/닫기) */}
            <MenuButton
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 전파 방지
                setMenuOpen(!isOpen);
              }}
            >
              ☰
            </MenuButton>
          </HeaderLogo>
          <HeaderMenu onClick={(e) => e.stopPropagation()}>
            <MenuBox>
              <MenuName to="/intro" onClick={() => setMenuOpen(false)}>
                회사 소개
              </MenuName>
            </MenuBox>
            <MenuBox>
              <MenuName to="/houseclean" onClick={() => setMenuOpen(false)}>
                입주ㆍ거주 청소
              </MenuName>
            </MenuBox>
            <MenuBox>
              <MenuName to="/completion" onClick={() => setMenuOpen(false)}>
                준공 청소
              </MenuName>
            </MenuBox>
            <MenuBox>
              <MenuName to="/special" onClick={() => setMenuOpen(false)}>
                특수 청소
              </MenuName>
            </MenuBox>
            <MenuBox>
              <MenuName to="/help" onClick={() => setMenuOpen(false)}>
                문의 하기
              </MenuName>
            </MenuBox>
            <MenuBox2>
              <LangBox>
                <MenuName>KOR</MenuName>
                <span class="css-9hfgjx">|</span>
                <MenuName>ENG</MenuName>
              </LangBox>
            </MenuBox2>
          </HeaderMenu>
        </HeaderBox>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
