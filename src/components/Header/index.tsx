import { useRouter } from 'next/router';
import React from 'react';
import Auth from '@/utils/auth';
import * as S from './styles';

export default function HeaderComponent() {
  const router = useRouter();

  const handleMove = async (page: string) => {
    await router.push(page);
  };

  const logout = () => {
    Auth.logout();
    handleMove('/Login');
  };

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo onClick={() => handleMove('/')}>DESTINY</S.Logo>
        <S.ButtonWrap>
          <S.Link onClick={() => handleMove('/boards/write')}>제작하기</S.Link>
          <S.Link type="button" onClick={() => handleMove('/mypage')}>
            마이페이지
          </S.Link>
          {Auth.checkToken() ? (
            <S.Link type="button" onClick={logout}>
              로그아웃
            </S.Link>
          ) : (
            <S.Link type="button" onClick={() => handleMove('/Login')}>
              로그인
            </S.Link>
          )}
        </S.ButtonWrap>
      </S.HeaderInner>
    </S.Header>
  );
}
