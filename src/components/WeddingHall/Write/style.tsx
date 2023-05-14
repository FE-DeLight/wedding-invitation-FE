import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 550px;
  border-radius: 10px;
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e5e5e5;
  padding: 16px 24px;
  border-radius: 10px 10px 0 0;
`;

export const ModalHeadTitle = styled.div`
  font-size: 13px;
`;

export const ModalBody = styled.div`
  padding: 24px;
  height: 530px;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;

  .daum-postcode {
    height: 480px !important;
  }
`;
