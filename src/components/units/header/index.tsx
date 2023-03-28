import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

export default function HeaderComponent() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  const handleMove = (page: string) => {
    router.push(`/boards/${page}`);
  };

  return (
    <S.Header>
      <S.Logo>LOGO</S.Logo>
      <S.ButtonWrap>
        <S.Button type="button" onClick={() => handleMove('write')}>
          제작하기
        </S.Button>
        <S.Button type="button" onClick={() => handleMove('')}>
          마이페이지
        </S.Button>
        <S.Button type="button">{isLogin ? '로그아웃' : '로그인'}</S.Button>
      </S.ButtonWrap>
    </S.Header>
  );
}
