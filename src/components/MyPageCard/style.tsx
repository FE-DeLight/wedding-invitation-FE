import styled from '@emotion/styled';

// Card.tsx
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Li = styled.li`
  height: 474px;
  font-size: 12px;
  background-color: #fff;
  border: solid 1px rgb(229, 229, 229);

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  // 639까지 1개
  @media all and (max-width: 639px) {
    width: 100%;
    margin-bottom: 40px;
  }

  // 640 ~1023 이상부터 2개
  @media screen and (min-width: 640px) and (max-width: 1023px) {
    width: 50%;
    width: calc(50% - 10px);
  }

  // 1024 이상 4개
  @media screen and (min-width: 1024px) {
    width: calc(25% - 20px);
    margin-right: 20px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  position: relative;
  padding: 32px 0;
  height: 318px;
  border-bottom: solid 1px rgb(229, 229, 229);
`;

export const IconButton = styled.div`
  button {
    position: absolute;
    background-color: transparent;
    right: 8px;
    top: 8px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 154px;
  padding: 20px 16px;
  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: #a3a3a3;
  }

  strong {
    color: #525252;
    font-weight: 400;
  }

  hr {
    margin: 16px 0;
    height: 1px;
    border: 0;
    background: rgb(229, 229, 229);
  }
`;

export const Footer = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
  span {
    /* background-color: red; */
  }
`;
