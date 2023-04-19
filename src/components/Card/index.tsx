import React from 'react';
import * as S from './style';

interface Props {
  type?: string;
  title?: string;
  children?: any;
  color?: string;
  backgroundImage? : string;
}

export default function Card(props: Props) {

  const {color, backgroundImage} = props;
  return (
    <S.Card color={color} backgroundImage={backgroundImage}>
      {props?.type !== 'preview' && <S.Title>{props?.title}</S.Title>}
      <S.Content>{props?.children}</S.Content>
    </S.Card>
  );
}