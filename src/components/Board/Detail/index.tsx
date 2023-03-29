import React from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Detail/style';

export default function BoardDetail() {
  return (
    <S.Wrapper>
      <S.ContentLeft>
        <Card color="white" type="preview">
          내용1
        </Card>
        <Card title="제목2" type="preview">
          내용2
        </Card>
      </S.ContentLeft>
    </S.Wrapper>
  );
}
