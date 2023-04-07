import styled from '@emotion/styled';

export const Wrap = styled.div`
  padding: 58px 0;
  display: ${(props) => props.withoutParents && 'flex'};
  justify-content: ${(props) => props.withoutParents && 'center'};
`;

export const Male = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Female = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0s;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-family: 'Nanum Myeongjo', serif;
  color: ${(props) => (props.grey ? '#A3A3A3' : '#000000')};
  padding: ${(props) => props.space && '0 8px'};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
`;
