import { useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const LoginButton = styled.div`
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
export default function LoginNaver() {
  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/mypage',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '45' },
    });
    naverLogin.init();
  };

  const handleNaverClick = () => {
    const naverLoginButton = document.getElementById('naverIdLogin_loginButton');
    if (naverLoginButton) naverLoginButton.click();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <>
      <LoginButton onClick={handleNaverClick}>
        <Image src="/images/naver_login_button_square.png" alt="Naver Logo" width={35} height={35} priority />
        <span>네이버계정으로 시작하기</span>
      </LoginButton>
      <div id="naverIdLogin" style={{ display: 'none' }} />
    </>
  );
}
