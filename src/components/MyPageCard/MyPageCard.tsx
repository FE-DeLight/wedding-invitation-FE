/* eslint-disable react/button-has-type */
import Image from 'next/image';
import React, { useState } from 'react';
import { GrShare } from 'react-icons/gr';
import Tooltip from '../ToolTip';
import * as S from './style';

export default function MyPageCard({ card }: any) {
  const { image, codeNumber, createDate, deleteDate } = card;
  const [oponTooltip, setOpenTootip] = useState(false);
  const handleTooltip = () => {
    setOpenTootip(!oponTooltip);
  };
  return (
    <S.Li>
      <S.Header>
        <S.ImageWrap>
          {/* DB에 저장된 default 이미지일 경우 보여짐 */}
          <Image src={image} width={150} height={254} alt="이미지 테스트" />
        </S.ImageWrap>
        <S.IconButton>
          <button onClick={handleTooltip}>
            {/* 추후, 컬러 변경해주기 */}
            <GrShare size="18" />
          </button>
        </S.IconButton>
        <Tooltip oponTooltip={oponTooltip} />
      </S.Header>
      <S.Body>
        <div>
          <span>코드번호</span>
          <strong>{codeNumber}</strong>
        </div>
        <div>
          <span>예식일</span>
          <span>{createDate}</span>
        </div>
        <div>
          <span>삭제 예정일</span>
          <span>{deleteDate}</span>
        </div>
        <hr />
        <S.Footer>
          <button>수정하기</button>
          <button>워터마크 제거</button>
        </S.Footer>
      </S.Body>
    </S.Li>
  );
}
