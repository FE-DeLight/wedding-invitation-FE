import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 30px;
  background-color: ${ props => props.color ? props.color : '#eee'};
  background-image: ${props => props.backgroundImage === '없음' ? "none" : "url('/images/pattern_1.png')" };
  // TODO 배경지 추가해야됨 && case문 추가
`;

export const Title = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  font-size: 24px;
  font-weight: 600;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
`;