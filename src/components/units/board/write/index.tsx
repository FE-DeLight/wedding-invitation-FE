import React from 'react';
import Card from '@/components/units/card';
import * as S from '@/components/units/board/write/style';
import { useRouter } from 'next/router';
import Select from '@/components/commons/Select';
import Button from '@/components/commons/Button';

interface Props {
  isEdit?: Boolean;
}

export default function BoardWrite(props: Props) {
  const router = useRouter();

  const select = ['a', 'b'];

  const handleSave = () => {
    router.push('/boards/');
  };

  console.log('isEdit', props?.isEdit);
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
      <S.ContentRight>
        <Card title="템플릿">
          <S.RowWrap>
            <S.Row>
              <S.ColTitle>셀렉트</S.ColTitle>
              <S.ColContent>
                <Select options={select} />
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>텍스트</S.ColTitle>
              <S.ColContent>
                <S.InputText type="text" />
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>라디오</S.ColTitle>
              <S.ColContent>
                <S.RadioGroup>
                  <S.LabelRadio htmlFor="radiotext01_1">
                    Black
                    <S.InputRadio type="radio" id="radiotext01_1" name="radiotext01" />
                  </S.LabelRadio>
                  <S.LabelRadio htmlFor="radiotext01_2">
                    White
                    <S.InputRadio type="radio" id="radiotext01_2" name="radiotext01" />
                  </S.LabelRadio>
                </S.RadioGroup>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>체크박스</S.ColTitle>
              <S.ColContent>
                <S.CheckboxGroup>
                  <S.LabelCheckbox htmlFor="checkboxtest01_1">
                    Black
                    <S.InputCheckbox type="checkbox" id="checkboxtest01_1" name="checkboxtest01" />
                  </S.LabelCheckbox>
                  <S.LabelCheckbox htmlFor="checkboxtest01_2">
                    White
                    <S.InputCheckbox type="checkbox" id="checkboxtest01_2" name="checkboxtest01" />
                  </S.LabelCheckbox>
                </S.CheckboxGroup>
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>텍스트박스</S.ColTitle>
              <S.ColContent>
                <S.Textarea />
              </S.ColContent>
            </S.Row>
            <S.Row>
              <S.ColTitle>체크박스</S.ColTitle>
              <S.ColContent>
                <Button>버튼</Button>
              </S.ColContent>
            </S.Row>
          </S.RowWrap>
        </Card>
        <Card title="예식일" />
        <Card color="white" title="첫 화면" />
        <Card title="청첩장 문구" />
        <Card color="white" title="보내는 사람" />
        <Card color="white" title="캘린더 스타일" />
        <Card color="white" title="갤러리" />
        <Card color="white" title="예식장 정보" />
        <Card color="white" title="길 안내" />
        <Card color="white" title="계좌 정보" />
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
