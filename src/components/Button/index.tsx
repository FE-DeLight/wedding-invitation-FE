import React from 'react';
import * as S from './style';

interface Props {
  children: string;
}

export default function Button(props: Props) {
  return <S.Button>{props?.children}</S.Button>;
}
