import styled from '@emotion/styled';

export const ModalWrap = styled.div`
  //padding: 24px;
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
    //width: 100%;
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