import styled from '@emotion/styled';

export const MypageContainer = styled.div`
  margin-top: 60;
  padding: 60px 20px 96px;
  color: #666;
  li {
    list-style: none;
  }
`;

export const Header = styled.section`
  display: flex;
  font-size: 12px;
  padding: 20px 8px;
  justify-content: space-between;

  ul {
    display: flex;
  }
  li {
    p {
      padding: 0 2px;
    }
  }
  span {
    color: rgb(163, 163, 163);
  }
`;

export const Impomation = styled.section`
  h1 {
    padding-bottom: 16px;
  }
  background-color: #fff;
  border: solid 1px rgb(229, 229, 229);
  padding: 32px 32px;

  li {
    display: flex;
    font-size: 12px;
    strong {
      font-weight: 400;
    }
    span {
      margin-right: 5px;
      font-weight: 300;
    }
  }

  p {
    font-size: 12px;
  }

  hr {
    margin-top: 16px;
    margin-bottom: 4px;
    height: 1px;
    border: 0;
    background: rgb(229, 229, 229);
  }
`;

export const Main = styled.section`
  padding: 48px 0 0;
`;
