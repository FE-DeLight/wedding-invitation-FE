import styled from '@emotion/styled';

interface WrapProps {
  withoutParents?: boolean;
}

interface TextProps {
  grey?: boolean;
  space?: boolean;
  small?: boolean;
}

export const Wrap = styled.div<WrapProps>`
  padding: 58px 0;
  display: ${(props) => props.withoutParents && 'flex'};
  justify-content: ${(props) => props.withoutParents && 'center'};
`;

export const Male = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Female = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span<TextProps>`
  font-family: 'Nanum Myeongjo', serif;
  color: ${(props) => (props.grey ? '#A3A3A3' : '#000000')};
  padding: ${(props) => props.space && '0 8px'};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
`;
