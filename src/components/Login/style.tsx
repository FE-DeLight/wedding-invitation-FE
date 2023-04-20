import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: block;
  width: 450px;
  height: 300px;
  padding-top: 40px;
  padding-bottom: 50px;
  text-align: center;
  background-color: #fff;
  border-radius: 0.5rem;
  border-width: 1px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: #404040;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 300;
  padding-top: 30px;
  color: #525252;
  :last-of-type {
    padding-top: 15px;
  }
`;

export const Bar = styled.span`
  display: block;
  margin: 35px auto;
  height: 2px;
  width: 40px;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  background-color: rgb(3, 199, 90);
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  span {
    color: #fff;
    font-size: 14px;
  }
`;
