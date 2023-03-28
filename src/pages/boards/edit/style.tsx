import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
