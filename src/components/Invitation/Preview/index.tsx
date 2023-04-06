import React from 'react';
import * as S from './style';

export default function Index({ text }: any) {
  return (
    <S.InvitationWrap>
      <div className="invitation-phrases">
        <S.Title>{text.title}</S.Title>
      </div>
      <div>
        <S.Content>{text.content}</S.Content>
      </div>
    </S.InvitationWrap>
  );
}
