import * as S from './style';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export default function LoginNaver() {
  const naverLoginRef = useRef<HTMLDivElement>(null);
  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '45' },
    });
    naverLogin.init();
  };

  const handleNaverClick = () => {
    const naverLoginButton = naverLoginRef.current?.querySelector('#naverIdLogin_loginButton');
    if (naverLoginButton) naverLoginButton.click();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <>
      <S.LoginButton onClick={handleNaverClick}>
        <Image src="/images/naver_login_button_square.png" alt="Naver Logo" width={35} height={35} priority />
        <span>네이버계정으로 시작하기</span>
      </S.LoginButton>
      <div id="naverIdLogin" ref={naverLoginRef} style={{ display: 'none' }} />
    </>
  );
}
