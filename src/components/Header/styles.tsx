import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 100%;
  padding: 15px 0;
  background-color: #111;
`;
export const Logo = styled.a``;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;
export const Link = styled.a``;
