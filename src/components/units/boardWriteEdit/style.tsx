import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`;
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  & > div {
    border-radius: 8px;
  }
`;
export const Content = styled.div``;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const ColTitle = styled.div`
  display: flex;
  min-width: 100px;
`;
export const ColContent = styled.div`
  display: flex;
  flex: 1;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;
export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
`;
export const InputRadio = styled.input`
  margin-left: 10px;
`;
export const InputText = styled.input``;
