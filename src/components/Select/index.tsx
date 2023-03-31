import React, { ChangeEvent } from 'react';
import * as S from './style';

interface Props {
  options: Array<object>;
}

export default function Select(props: Props) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
  return (
    <S.SelectWrap>
      <S.Select onChange={handleChange}>
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
