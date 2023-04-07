import styled from '@emotion/styled';

export const Wrap = styled.div`
  padding: 56px 0;
  display: ${(props) => (props.withoutParents ? 'flex' : 'block')};
`;

export const Male = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0s;
`;

export const Female = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0, 0, 0.2, 1) 0s;
  margin-top: 15px;
`;

export const Text = styled.span`
  font-size: 16px;
  font-family: 'Nanum Myeongjo', serif;
  color: ${(props) => (props.grey ? '#A3A3A3' : '#000000')};
`;
