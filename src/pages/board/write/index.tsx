import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;
const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  & div {
    border-radius: 8px;
  }
`;
const CardBlack = styled.div`
  padding: 30px;
  background-color: #333;
`;
const CardWhite = styled(CardBlack)`
  background-color: #fff;
  color: #333;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const Content = styled.div``;

export default function BoardWritePage() {
  return (
    <Wrapper>
      <ContentLeft>
        <CardBlack>
          <Title>제목</Title>
          <Content>내용</Content>
        </CardBlack>
        <CardWhite>
          <Title>제목</Title>
          <Content>내용</Content>
        </CardWhite>
      </ContentLeft>
      <ContentRight>
        <CardWhite>
          <Title>제목</Title>
          <Content>내용</Content>
        </CardWhite>
        <CardBlack>
          <Title>제목</Title>
          <Content>내용</Content>
        </CardBlack>
      </ContentRight>
    </Wrapper>
  );
}
