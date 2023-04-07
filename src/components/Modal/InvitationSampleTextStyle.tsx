import styled from '@emotion/styled';

export const ModalLayout = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 61px;
  padding: 16px 24px;
  background-color: #e5e5e5;
  
  button {
    background-color: transparent;
  }
`;

export const SelectSample = styled.div`
  border: 1px solid #000;
  padding: 40px;
  text-align: center;
  font-size: 0.875rem;
  color: black;
  max-width: 380px;
  min-height: 140px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  max-height: 552px;
  div {
    padding: 16px 24px;
  }
`;