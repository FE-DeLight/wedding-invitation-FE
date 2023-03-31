import React, { useState } from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Write/style';
import { useRouter } from 'next/router';
import TemplateWrite from '@/components/WeddingTemplate/Write';
import TemplatePreview from '@/components/WeddingTemplate/Preview';

type TemplateType = {
  id: number;
  value: string;
  check: boolean;
};

// 템플릿

const templateStyle = [
  { id: 1, value: '심플' },
  { id: 2, value: '직접 디자인 하기' },
];
const templateType: TemplateType[] = [
  { id: 1, value: 'A', check: false },
  { id: 2, value: 'B', check: false },
  { id: 3, value: 'C', check: false },
];
const templateColor = [
  { id: 1, value: '검정색', check: false },
  { id: 2, value: '빨강색', check: false },
  { id: 3, value: '흰색', check: false },
];

// 템플릿

export default function BoardWrite() {
  const router = useRouter();
  const [templateTypeSelect, setTemplateTypeSelect] = useState('');

  const handleSave = () => {
    router.push('/boards/');
  };

  return (
    <S.Wrapper>
      <S.ContentLeft>
        <Card type="preview">
          <TemplatePreview templateTypeSelect={templateTypeSelect} />
        </Card>
        <Card title="제목2" type="preview">
          내용2
        </Card>
      </S.ContentLeft>
      <S.ContentRight>
        <Card title="템플릿">
          <TemplateWrite
            color={templateColor}
            type={templateType}
            setTemplateTypeSelect={setTemplateTypeSelect}
            style={templateStyle}
          />
        </Card>
        <Card title="예식일" />
        <Card title="첫 화면" />
        <Card title="청첩장 문구" />
        <Card title="보내는 사람" />
        <Card title="캘린더 스타일" />
        <Card title="갤러리" />
        <Card title="예식장 정보" />
        <Card title="길 안내" />
        <Card title="계좌 정보" />
        <Card title="연락처 정보" />
        <Card title="식전 영상" />
        <Card title="안내사항" />
        <Card title="썸네일" />
        <Card title="애니메이션 효과" />
        <Card title="배경 음악" />
        <Card title="방명록" />
        <Card title="추가 옵션" />
      </S.ContentRight>
      <S.ContentBottom>
        <S.SubmitButton onClick={handleSave}>저장하기</S.SubmitButton>
      </S.ContentBottom>
    </S.Wrapper>
  );
}
