import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  position: relative;
  width: 100%;
`;
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: calc(100vh - 140px);
  margin: 80px 0 110px;
  padding-bottom: 40px;
  overflow: auto;
`;
export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  height: calc(100vh - 140px);
  margin: 80px 0 110px;
  padding-bottom: 40px;
  overflow: auto;
  & > div {
    border-radius: 8px;
  }
`;
export const ContentBottom = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
`;
export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #fff;
  color: #333;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
