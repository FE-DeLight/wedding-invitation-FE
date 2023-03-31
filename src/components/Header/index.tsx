import React from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

export default function HeaderComponent() {
  const router = useRouter();

  const handleMove = (page: string) => {
    router.push(`/boards/${page}`);
  };

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo>LOGO</S.Logo>
        <S.ButtonWrap>
          <S.Link onClick={() => handleMove('write')}>제작하기</S.Link>
          <S.Link type="button" onClick={() => handleMove('')}>
            마이페이지
          </S.Link>
          <S.Link type="button">로그인</S.Link>
        </S.ButtonWrap>
      </S.HeaderInner>
    </S.Header>
  );
}
