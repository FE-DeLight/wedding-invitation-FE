import React, { ChangeEvent } from 'react';
import * as S from './style';

interface Props {
  options: Array<object>;
}

export default function Select(props: Props) {
  return (
    <S.SelectWrap>
      <S.Select >
        {props?.options.map((item: any) => {
          return (
            <option value={item.value} key={item.id}>
              {item.value}
            </option>
          );
        })}
      </S.Select>
    </S.SelectWrap>
  );
}
