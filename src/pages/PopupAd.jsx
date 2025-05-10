import React, { useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const PopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
`;

const PopupContent = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 768 / 853;
  border-radius: 8px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CheckboxRow = styled.div`
  font-size: 14px;
  margin-right: 12px;
`;

const CloseButton = styled.button`
  margin-right: 12px;
  padding: 5px 16px;
  background-color: #2c57e4;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1a3ca1;
  }
`;

const PopupAd = () => {
  const [searchParams] = useSearchParams();
  const imageurl = searchParams.get("image");
  const [hideToday, setHideToday] = useState(false);

  const handleClose = () => {
    if (hideToday) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      localStorage.setItem(`hidePopupUntil-${imageurl}`, tomorrow.getTime());
    }
    window.close();
  };

  return (
    <PopupWrapper>
      <BannerImage src={imageurl} />
      <PopupContent>
        <CheckboxRow>
          <input
            type="checkbox"
            id="dontShow"
            onChange={(e) => setHideToday(e.target.checked)}
          />
          <label htmlFor="dontShow"> 오늘 하루 보지 않기</label>
        </CheckboxRow>
        <CloseButton onClick={handleClose}>닫기</CloseButton>
      </PopupContent>
    </PopupWrapper>
  );
};

export default PopupAd;
