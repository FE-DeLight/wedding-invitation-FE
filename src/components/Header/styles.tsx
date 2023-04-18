import styled from '@emotion/styled';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  width: 100%;
  background-color: #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  padding: 15px 0;
`;

export const Logo = styled.a``;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;
export const Link = styled.a``;
