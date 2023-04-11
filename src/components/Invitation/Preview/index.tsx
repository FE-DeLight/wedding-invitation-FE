import React from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';

export default function Index() {
  const { text } = useSelector((state: any) => state.invitation);

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
