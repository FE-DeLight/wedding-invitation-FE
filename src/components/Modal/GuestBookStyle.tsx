import styled from '@emotion/styled';

export const ModalLayout = styled.div`
  position: fixed;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: 510px;
  max-height: 600px;
  background-color: white;
  transform: translate(-50%, -50%);
`;

export const ModalWrap = styled.div`
  padding: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #e5e5e5;
`;

export const IconButton = styled.button`
  height: 0;
  color: black;
`;

export const ModalBody = styled.form`
  //
`;

export const SelectSample = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  color: black;
  margin-bottom: 16px;
  label {
    color: black;
    width: 80px;
    text-align: start;
  }

  input,
  textarea {
    width: 100%;
  }
`;

export const ModalBottom = styled.div`
  text-align: end;

  button {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;