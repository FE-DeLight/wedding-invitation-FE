import styled from '@emotion/styled';

interface TextProps {
  small?: boolean;
}

export const Container = styled.div`
  padding: 56px 0;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Detail = styled.div`
  padding: 15px 0;
  font-size: 12px;
  cursor: pointer;
  background-color: #e5e5e5;
`;

export const Address = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.small ? '20px' : '16px')};
  padding-bottom: ${(props) => (props.small ? '20px' : '15px')};
  color: #06080f;
  font-family: 'Nanum Myeongjo', serif;
`;

export const CallWrapper = styled.div``;

export const CallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
  padding: 0 12px;
  background-color: #ffffff;
  height: 28px;
`;

export const Person = styled.p`
  margin-left: 5px;
`;
