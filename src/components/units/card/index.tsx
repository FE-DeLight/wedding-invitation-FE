import React from 'react';
import * as S from './style';

interface Props {
  color?: string;
  title?: string;
  children: any;
}

export default function Card(props: Props) {
  return (
    <S.Card color={props?.color}>
      <S.Title color={props?.color}>{props?.title}</S.Title>
      <S.Content>{props?.children}</S.Content>
    </S.Card>
  );
}
