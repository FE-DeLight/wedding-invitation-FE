import React from 'react';
import MyPageCard from './MyPageCard';
import * as S from './style';

export default function Card({ mypageCards }: any) {
  return (
    <S.Ul>
      {Object.keys(mypageCards).map((key: any) => (
        <MyPageCard key={key} card={mypageCards[key]} />
      ))}
    </S.Ul>
  );
}
