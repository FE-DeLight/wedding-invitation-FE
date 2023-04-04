/* eslint-disable react-hooks/rules-of-hooks */
import Card from '@/components/MyPageCard/Card';
import React, { useState } from 'react';
import * as S from './style';

export default function index() {
  const [mypageCards, setMyPageCards] = useState({
    '1': {
      id: 1,
      image: 'image1',
      codeNumber: 'QMmwgXn2',
      createDate: '2023.03.20',
      deleteDate: '2023.04.29',
    },
    '2': {
      id: 2,
      image: 'image2',
      codeNumber: '4xKYODAt',
      createDate: '2023.03.20',
      deleteDate: '2023.04.28',
    },
    '3': {
      id: 3,
      image: 'image3',
      codeNumber: 'TpBldQLA',
      createDate: '2023.03.20',
      deleteDate: '2023.04.22',
    },
    '4': {
      id: 4,
      image: 'asdlfkjsdf',
      codeNumber: 'TpBldQLA',
      createDate: '2023.03.20',
      deleteDate: '2023.04.29',
    },
    '5': {
      id: 5,
      image: 'asdlfkjsdf',
      codeNumber: 'TpBldQLA',
      createDate: '2023.03.20',
      deleteDate: '2023.04.29',
    },
  });
  return (
    <S.MypageContainer>
      <S.Header>
        <ul>
          <li>
            <p>홈</p>
          </li>
          <li>
            <p>/</p>
          </li>
          <li>
            <p>마이페이지</p>
          </li>
        </ul>
        <span>이메일</span>
      </S.Header>
      <S.Impomation>
        <h1>Information</h1>
        <ul>
          <li>
            <span> • </span>
            <p>
              <strong>[ 수정하기 ]</strong>
              {' 버튼을 통해 언제든지 수정 및 변경이 가능합니다. '}
            </p>
          </li>
          <li>
            <span> • </span>
            <p>
              {'임시 제작 된 청첩장은 워터마크가 있으며 '}
              <strong>[ 워터마크 제거 ]</strong>
              {' 버튼을 통해 제거가 가능합니다. '}
            </p>
          </li>
          <li>
            <span> • </span>
            <p>
              <strong>[ 수정하기 ]</strong>
              {' 버튼을 통해 언제든지 수정 및 변경이 가능합니다. '}
            </p>
          </li>
        </ul>
        <hr />
        <p>
          {'코드번호는 자동 생성 된 청첩장의 고유 식별자입니다. ( 청첩장 URL - '}
          <span>https://moinvi.com/card/[코드번호]</span>
          {') '}
        </p>
      </S.Impomation>
      <S.Main>
        <Card mypageCards={mypageCards} setMyPageCards={setMyPageCards} />
      </S.Main>
    </S.MypageContainer>
  );
}
