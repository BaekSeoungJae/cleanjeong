import React, { useState, useEffect } from "react";
import styled from "styled-components";
import adImg1 from "../img/mobile/002.jpg";
import adImg2 from "../img/mobile/003.jpg";

const adImages = [adImg1, adImg2];

const Overlay = styled.div`
  position: fixed;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  @media (max-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 400px) {
    width: 95%;
    height: auto;
    aspect-ratio: 4 / 5;
  }
  @media (max-height: 600px) {
    display: none;
  }
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CheckboxRow = styled.div`
  font-size: 14px;
  margin: 10px 0;
  text-align: left;
`;

const CloseButton = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
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
  const [visibleAds, setVisibleAds] = useState([]);

  useEffect(() => {
    const now = Date.now();
    const visible = adImages.filter((img) => {
      const key = `hidePopupUntil-${img}`;
      const hideUntil = localStorage.getItem(key);
      return !hideUntil || now > Number(hideUntil);
    });
    setVisibleAds(visible);
  }, []);

  const handleClose = (img, hideToday) => {
    if (hideToday) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      localStorage.setItem(`hidePopupUntil-${img}`, tomorrow.getTime());
    }
    setVisibleAds((prev) => prev.filter((ad) => ad !== img));
  };

  return (
    <>
      {visibleAds.map((img, index) => (
        <PopupModal
          key={img}
          image={img}
          onClose={handleClose}
          index={index}
          top={130}
          left={100 + index * 410}
        />
      ))}
    </>
  );
};

const PopupModal = ({ image, onClose, index, top, left }) => {
  const [hideToday, setHideToday] = useState(false);

  return (
    <Overlay top={top} left={left}>
      <ModalContainer>
        <BannerImage src={image} alt="광고 배너" />
        <CheckboxRow>
          <input
            type="checkbox"
            id={`dontShow-${index}`}
            onChange={(e) => setHideToday(e.target.checked)}
          />
          <label htmlFor={`dontShow-${index}`}>
            {" "}
            오늘 하루 이 창 보지 않기
          </label>
        </CheckboxRow>
        <CloseButton onClick={() => onClose(image, hideToday)}>
          닫기
        </CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default PopupAd;
