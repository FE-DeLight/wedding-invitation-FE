import React from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Write/style';
import { useRouter } from 'next/router';
import Select from '@/components/Select';
import Button from '@/components/Button';
import * as G from '@/styles/globals';
import TemplateWrite from '@/components/WeddingTemplate/Write';
import TemplatePreview from '@/components/WeddingTemplate/Preview';
import SampleModal from '@/Modal/SampleModal';
import Invitation from '@/components/Preview/Invitation';

// interface Props {
//   isEdit?: Boolean;
// }

export default function BoardWrite({
  openModal,
  text,
  setText,
  handleChange,
  showSampleText,
  sandContent,
  textAreaRef,
}: any) {
  console.log(text);
  const router = useRouter();

  const handleSave = () => {
    router.push('/boards/');
  };

  return (
    <>
      <S.Wrapper>
        {/* Left */}
        <S.ContentLeft>
          <Card color="white" type="preview">
            <TemplatePreview />
          </Card>
          <Card title="제목2" type="preview">
            {/* 청첩장 문구 */}
            <Invitation textAreaRef={textAreaRef} text={text} setText={setText} handleChange={handleChange} />
          </Card>
        </S.ContentLeft>

        {/* Right */}
        <S.ContentRight>
          <Card title="템플릿">
            <G.RowWrap>
              <G.Row>
                <G.ColTitle>셀렉트</G.ColTitle>
                <G.ColContent>
                  <Select options={['a', 'b']} />
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>텍스트</G.ColTitle>
                <G.ColContent>
                  <G.InputText type="text" />
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>라디오</G.ColTitle>
                <G.ColContent>
                  <G.RadioGroup>
                    <G.LabelRadio htmlFor="radiotext01_1">
                      Black
                      <G.InputRadio type="radio" id="radiotext01_1" name="radiotext01" />
                    </G.LabelRadio>
                    <G.LabelRadio htmlFor="radiotext01_2">
                      White
                      <G.InputRadio type="radio" id="radiotext01_2" name="radiotext01" />
                    </G.LabelRadio>
                  </G.RadioGroup>
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>체크박스</G.ColTitle>
                <G.ColContent>
                  <G.CheckboxGroup>
                    <G.LabelCheckbox htmlFor="checkboxtest01_1">
                      Black
                      <G.InputCheckbox type="checkbox" id="checkboxtest01_1" name="checkboxtest01" />
                    </G.LabelCheckbox>
                    <G.LabelCheckbox htmlFor="checkboxtest01_2">
                      White
                      <G.InputCheckbox type="checkbox" id="checkboxtest01_2" name="checkboxtest01" />
                    </G.LabelCheckbox>
                  </G.CheckboxGroup>
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>텍스트박스</G.ColTitle>
                <G.ColContent>
                  <G.Textarea />
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>버튼ㄴ</G.ColTitle>
                <G.ColContent>
                  <Button>버튼</Button>
                </G.ColContent>
              </G.Row>
            </G.RowWrap>
          </Card>
          <Card title="템플릿">
            <TemplateWrite />
          </Card>
          <Card title="예식일" />
          <Card color="white" title="첫 화면" />
          <Card title="청첩장 문구">
            <G.RowWrap>
              <G.Row>
                <G.ColTitle>제목</G.ColTitle>
                <G.ColContent>
                  <G.InputText type="text" />
                </G.ColContent>
              </G.Row>
              <G.Row>
                <G.ColTitle>텍스트박스</G.ColTitle>
                <G.ColContent>
                  <G.Textarea />
                </G.ColContent>
              </G.Row>
              <G.TextButton>
                <span>샘플 텍스트 보기</span>
              </G.TextButton>
            </G.RowWrap>
          </Card>
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
          <Card title="방명록">
            <G.RowWrap>
              <G.Row>
                <G.ColTitle>비밀번호</G.ColTitle>
                <G.ColContent>
                  <G.InputText type="text" />
                </G.ColContent>
              </G.Row>
            </G.RowWrap>
          </Card>
          <Card title="추가 옵션" />
        </S.ContentRight>
        <S.ContentBottom>
          <S.SubmitButton onClick={handleSave}>저장하기</S.SubmitButton>
        </S.ContentBottom>
      </S.Wrapper>
      <SampleModal openModal={openModal} showSampleText={showSampleText} sandContent={sandContent} />
    </>
  );
}
