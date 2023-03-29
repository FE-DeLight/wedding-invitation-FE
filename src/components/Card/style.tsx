import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 30px;
  background-color: ${(props) => (props.color === 'white' ? '#fff' : '#333')};
  color: ${(props) => (props.color === 'white' ? '#333' : '#fff')};
`;

export const Title = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => (props.color === 'white' ? '#333' : '#fff')};
  font-size: 24px;
  font-weight: 600;
`;

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
