/* eslint-disable react/button-has-type */
import React from 'react';
import * as S from './style';

export default function MyPageCard({ card }: any) {
  const { image, codeNumber, createDate, deleteDate } = card;

  return (
    <S.Li>
      <S.Header>
        <div>{image}</div>
        <S.IconButton>
          <button>Icon</button>
        </S.IconButton>
      </S.Header>
      <S.Body>
        <div>
          <span>코드번호</span>
          <strong>{codeNumber}</strong>
        </div>
        <div>
          <span>예식일</span>
          <span>{createDate}</span>
        </div>
        <div>
          <span>삭제 예정일</span>
          <span>{deleteDate}</span>
        </div>
        <hr />
        <S.Footer>
          <button>수정하기</button>
          <button>워터마크 제거</button>
        </S.Footer>
      </S.Body>
    </S.Li>
  );
}
