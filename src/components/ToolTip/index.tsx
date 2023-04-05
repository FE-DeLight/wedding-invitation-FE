/* eslint-disable react/button-has-type */
import React from 'react';
import * as S from './style';

export default function Tooltip({ oponTooltip }: any) {
  return (
    oponTooltip && (
      <S.TooltipWrap>
        <S.ToolListWrap>
          <S.List>
            <button>청첩장 미리보기</button>
          </S.List>
          <S.List>
            <button>카카오톡 공유하기</button>
          </S.List>
          <S.List>
            <button style={{ borderBottom: '1px dashed #a3a3a3' }}>링크 복사하기</button>
          </S.List>
          <S.List>
            <button>청첩장 복제하기</button>
          </S.List>
        </S.ToolListWrap>
      </S.TooltipWrap>
    )
  );
}
