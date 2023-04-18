import styled from '@emotion/styled';

export const Container = styled.div`
      padding: 56px 0;
`;

export const Title = styled.div`
      text-align: center;
      font-size: 20px;
      color: #06080f;
      //font-family: 'Nanum Myeongjo', serif;
      &:after {
      content: '';
      display: block;
      width: 20px;
      border-bottom: 1px solid #06080f;
      margin: 10px auto 0;
      }
`;

export const Wrapper = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47.5px;
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #eeeeee;
`;