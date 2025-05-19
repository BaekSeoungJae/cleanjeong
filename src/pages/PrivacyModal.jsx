// components/PrivacyModal.jsx
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const Strong = styled.strong`
  display: block;
  margin-top: 16px;
`;

const PrivacyModal = ({ onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <h3>개인정보처리방침</h3>
        <p>
          클린정(이하 ‘회사’)은 이용자의 개인정보를 중요시하며, 관련 법령에 따라
          접속자 정보를 보호하고 있습니다.
        </p>

        <Strong>1. 수집하는 정보</Strong>
        <p>- 접속자의 IP 주소, 브라우저 정보, 접속 일시 등</p>

        <Strong>2. 수집 목적</Strong>
        <p>
          - 보안 로그 확인 및 악성 트래픽 방지
          <br />- 서비스 개선 및 통계 분석
        </p>

        <Strong>3. 보유 및 이용 기간</Strong>
        <p>- 수집일로부터 최대 6개월 보관 후 자동 삭제</p>

        <Strong>4. 제3자 제공</Strong>
        <p>
          - 원칙적으로 외부에 제공하지 않으며, 법령에 따라 필요한 경우에만
          예외적으로 제공될 수 있습니다.
        </p>

        <Strong>5. 이용자 권리</Strong>
        <p>
          - IP 정보는 자동 수집되는 정보로, 별도의 수정을 요청할 수 없습니다.
        </p>

        <Strong>6. 문의</Strong>
        <p>- 이메일: cyy8300@naver.com</p>
      </ModalBox>
    </ModalBackdrop>
  );
};

export default PrivacyModal;
