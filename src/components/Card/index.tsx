import React from 'react';
import * as S from './style';

export default function Card({ color, title, children }: any) {
  return (
    <S.Card color={color}>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Card>
  );
}
