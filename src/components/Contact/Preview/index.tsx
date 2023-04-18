import React from 'react';
import * as S from './style';

export default function ContactPreview() {
  return (
    <>
      <S.Container>
        <S.Title>마음 전하실 곳</S.Title>
        <S.Wrapper>
          <S.Button>
            <span>신랑에게 연락하기</span>
          </S.Button>
          <S.Button>
            <span>신부에게 연락하기</span>
          </S.Button>
          <S.Button>
            <span>혼주에게 연락하기</span>
          </S.Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
