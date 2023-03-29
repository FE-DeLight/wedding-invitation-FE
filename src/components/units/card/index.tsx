import React from 'react';
import * as S from './style';

interface Props {
  type?: string;
  color?: string;
  title?: string;
  children: any;
}

export default function Card(props: Props) {
  return (
    <S.Card color={props?.color}>
      {props?.type !== 'preview' && <S.Title color={props?.color}>{props?.title}</S.Title>}
      <S.Content>{props?.children}</S.Content>
    </S.Card>
  );
}
