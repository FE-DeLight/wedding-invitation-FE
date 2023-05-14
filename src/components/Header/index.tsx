import React from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';
import { resetUser } from '@/store/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function HeaderComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { email } = useSelector((state: any) => state.login);

  const handleMove = (page: string) => {
    router.push(`/boards/${page}`);
  };

  const handleLogout = () => {
    if (!email) return;

    dispatch(resetUser()); // 사용자 정보 초기화
    localStorage.removeItem('token'); // 토큰 삭제
    router.push('/');
  };

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo>LOGO</S.Logo>
        <S.ButtonWrap>
          <S.Link onClick={() => handleMove('write')}>제작하기</S.Link>
          <S.Link
            type="button"
            onClick={() => {
              router.push('/mypage');
            }}
          >
            마이페이지
          </S.Link>
          <S.Link type="button" onClick={handleLogout}>
            {email ? '로그아웃' : '로그인'}
          </S.Link>
        </S.ButtonWrap>
      </S.HeaderInner>
    </S.Header>
  );
}
