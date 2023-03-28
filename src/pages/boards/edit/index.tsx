import React from 'react';
import Card from '@/components/card';
import * as S from './style';

export default function BoardEditPage() {
  return (
    <S.Wrapper>
      <S.ContentLeft>
        <Card color="white" title="제목1">
          내용1
        </Card>
        <Card title="제목2">내용2</Card>
      </S.ContentLeft>
      <S.ContentRight>
        <Card title="제목3">내용3</Card>
        <Card color="white" title="제목4">
          내용4
        </Card>
      </S.ContentRight>
    </S.Wrapper>
  );
}
