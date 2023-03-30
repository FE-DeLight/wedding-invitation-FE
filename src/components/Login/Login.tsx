import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import LoginNaver from '@/components/Login/LoginNaver';
import { useRouter } from 'next/router';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
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

const Title = styled.h2`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: #404040;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 300;
  padding-top: 30px;
  color: #525252;
  :last-of-type {
    padding-top: 15px;
  }
`;

const Bar = styled.span`
  display: block;
  margin: 35px auto;
  height: 2px;
  width: 40px;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
`;

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      window.localStorage.setItem('token', window.location.href.split('=')[1].split('&')[0] ?? 'none');
      router.push('/mypage');
    }
  });

  return (
    <Container>
      <Wrapper>
        <Title>MOINVI</Title>
        <Text>네이버계정으로 간편하게 가입하고</Text>
        <Text>쉽게 모바일 청첩장을 제작하세요</Text>
        <Bar />
        <LoginNaver />
      </Wrapper>
    </Container>
  );
}
