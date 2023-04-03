/* eslint-disable @typescript-eslint/no-shadow */
import React, { useRef, useState } from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Write/style';
import { useRouter } from 'next/router';
import Select from '@/components/Select';
import Button from '@/components/Button';
import * as G from '@/styles/globals';
import TemplateWrite from '@/components/WeddingTemplate/Write';
import TemplatePreview from '@/components/WeddingTemplate/Preview';
import SampleModal from '@/components/Modal/SampleModal';
import Invitation from '@/components/Invitation/Write/Invitation';
import PrivewCard from '@/components/GuestBook/PrivewCard';
import GuestBookModal from '@/components/Modal/GuestBookModal';

export default function BoardWrite() {
  // 청첩장 문구 관련 State, Function
  const [openModal, setModal] = useState(false);
  const textAreaRef = useRef();
  const [text, setText] = useState({
    title: '확인',
    content: '확인',
  });

  const sandContent = (e) => {
    const content = e.target.innerHTML;
    const replaceSpace = content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    setModal(!openModal);
    setText({
      ...text,
      content: replaceSpace,
    });
  };

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setText({
        ...text,
        title: e.target.value,
      });
    } else {
      setText({
        ...text,
        content: e.target.value,
      });
    }
  };

  const showSampleText = () => {
    setModal(!openModal);
  };

  const router = useRouter();

  const handleSave = () => {
    router.push('/boards/');
  };

  // 방명록 관련 State, Function
  const [cards, setCards] = useState({});
  const [openGuestBookModal, setGuestModal] = useState(false);
  const [openGuestBookDelectModal, setGuestDelectModal] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState('');
  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };
  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };

  const handleValidation = () => {
    setPasswordValidation('');
  };

  const HandleGBDelectVisibility = () => {
    console.log(' 왜  닫기야 안되니? ');
    handleValidation();
    setGuestDelectModal(!openGuestBookDelectModal);
  };

  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    setGuestModal(!openGuestBookModal);
  };

  const deleteCard = (cardPassword, id) => {
    const updated = { ...cards }; // card를 받아온다.
    if (updated[id].password === cardPassword) {
      setCards(() => {
        delete updated[id];
        return updated;
      });
      setGuestDelectModal(!openGuestBookDelectModal);
    } else if (updated[id].password !== cardPassword) {
      setPasswordValidation(!passwordValidation);
    } else {
      // 공백 && 포커스를 가져길을때 === 비밀번호를 입력해주세요.
    }
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
            <div className="invitation-phrases">
              <p>{text.title}</p>
            </div>
            <div>
              <p>{text.content}</p>
            </div>
          </Card>
          {/* 방명록 */}
          <Card title="" type="preview">
            <h3 className="invitation-phrases">
              <p>방명록</p>
            </h3>
            <PrivewCard
              cards={cards}
              setGuestDelectModal={setGuestDelectModal}
              deleteCard={deleteCard}
              openGuestBookDelectModal={openGuestBookDelectModal}
              HandleGBDelectVisibility={HandleGBDelectVisibility}
              passwordValidation={passwordValidation}
              handleValidation={handleValidation}
            />
            <S.GuestBookAddButton onClick={addPost}>방명록 남기기</S.GuestBookAddButton>
            <GuestBookModal
              openGuestBookModal={openGuestBookModal}
              handleVisibility={handleVisibility}
              addCard={addCard}
            />
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
            <Invitation
              text={text}
              textAreaRef={textAreaRef}
              handleChange={handleChange}
              showSampleText={showSampleText}
            />
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
              <G.Row>
                <G.ColTitle />
                <G.ColContent>※ 방명록을 삭제할 때 필요한 비밀번호입니다.</G.ColContent>
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
