import React from 'react';
import * as S from './style';

interface Props {
  options: Array<string>;
}

export default function Select(props: Props) {
  return (
    <S.SelectWrap>
      <S.Select>
        {props?.options.map((item: any) => {
          return <option value="">{item}</option>;
        })}
      </S.Select>
    </S.SelectWrap>
  );
}
