import styled from '@emotion/styled';

export const RowWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const ColTitle = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  min-height: 40px;
`;
export const ColContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 100px);
`;
export const RowItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputText = styled.input``;
export const Textarea = styled.textarea``;
export const Button = styled.button``;
export const TextButton = styled.button`
  font-size: 12px;
  text-align: right;
  text-decoration: underline;
  height: 0;
  padding: 0;
  border-radius: none;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  color: #06080f;
  font-family: 'Nanum Myeongjo', serif;
  &:after {
    content: '';
    display: block;
    width: 20px;
    border-bottom: 1px solid #06080f;
    margin: 10px auto 0;
  }
`;
