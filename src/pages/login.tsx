import React, { useEffect } from 'react';
import LoginNaver from '@/components/Login/LoginNaver';
import { useRouter } from 'next/router';
import * as S from '@/components/Login/style';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const token = window.location.href.includes('access_token');
    if (token) {
      window.localStorage.setItem('token', window.location.href.split('=')[1].split('&')[0] ?? 'none');
      router.push('/mypage');
    }
  }, [router]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>MOINVI</S.Title>
        <S.Text>네이버계정으로 간편하게 가입하고</S.Text>
        <S.Text>쉽게 모바일 청첩장을 제작하세요</S.Text>
        <S.Bar />
        <LoginNaver />
      </S.Wrapper>
    </S.Container>
  );
}
