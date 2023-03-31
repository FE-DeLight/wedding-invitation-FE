import React from 'react';
import * as S from './style';

interface Props {
  type?: string;
  title?: string;
  children?: any;
}

export default function Card(props: Props) {
  return (
    <S.Card>
      {props?.type !== 'preview' && <S.Title>{props?.title}</S.Title>}
      <S.Content>{props?.children}</S.Content>
    </S.Card>
  );
}
