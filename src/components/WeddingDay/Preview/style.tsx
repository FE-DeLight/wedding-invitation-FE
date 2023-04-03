import styled from '@emotion/styled';

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

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Date = styled.p`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 16px;
  color: #171717;
`;

export const Dday = styled.div`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 12px;
  color: #171717;
  margin-top: 15px;

  > span.red {
    color: #f87171;
  }
`;
