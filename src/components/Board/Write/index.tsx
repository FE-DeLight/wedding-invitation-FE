import React, { useRef, useState } from 'react';
import Card from '@/components/Card';
import * as S from '@/components/Board/Write/style';
import { useRouter } from 'next/router';
import TemplateWrite from '@/components/WeddingTemplate/Write';
import TemplatePreview from '@/components/WeddingTemplate/Preview';
import InvitationSampleTextModal from '@/components/Modal/InvitationSampleTextModal';
import InvitationPreview from '@/components/Invitation/Preview';
import InvitationWrite from '@/components/Invitation/Write';
import GuestBookWrite from '@/components/GuestBook/Write';
import GuestBookPreview from '@/components/GuestBook/Preview';
import WeddingDayWrite from '@/components/WeddingDay/Write';
import WeddingDayPreview from '@/components/WeddingDay/Preview';
import CalendarStyleWrite from '@/components/CalendarStyle/Write';

type TemplateType = {
  id: number;
  value: string;
};

// 템플릿

const templateType: TemplateType[] = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' },
  { id: 4, value: 'Img' },
];
const templateColor = [
  { id: 1, value: 'Ink Black', color: 'rgb(6, 8, 15)' },
  { id: 2, value: 'Sour Cream', color: 'rgb(255, 253, 247)' },
  { id: 3, value: 'Misty Rose', color: 'rgb(245, 230, 227)' },
  { id: 4, value: 'Dusty Ash', color: 'rgb(92, 107, 100)' },
  { id: 5, value: 'Wenge', color: 'rgb(105, 94, 78)' },
  { id: 6, value: 'Purple Violet', color: 'rgb(65, 53, 77)' },
  { id: 7, value: 'Deep Blue', color: 'rgb(8, 17, 59)' },
];

// 템플릿

export default function BoardWrite() {
  // 청첩장 문구 관련 State, Function
  const [openModal, setModal] = useState(false);
  const textAreaRef = useRef();
  const [text, setText] = useState({
    title: '초대합니다',
    content: '[청첩장 문구]에 내용을 입력해 주세요.',
  });

  const sandContent = (e: any) => {
    const content = e.target.innerHTML;
    const replaceSpace = content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    setModal(!openModal);
    setText({
      ...text,
      content: replaceSpace,
    });
  };

  const handleChange = (e: any) => {
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
  const [openGuestBookDelectModal, setGuestDelectModal] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState('');
  const [weddingDay, setWeddingDay] = useState<Date>(new Date());
  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };
  const handleValidation = () => {
    setPasswordValidation('');
  };
  const HandleGBDelectVisibility = () => {
    handleValidation();
    setGuestDelectModal(!openGuestBookDelectModal);
  };
  const deleteCard = (cardPassword: any, id: any) => {
    const updated: any = { ...cards };
    if (updated[id].password === cardPassword) {
      setCards(() => {
        delete updated[id];
        return updated;
      });
      setGuestDelectModal(!openGuestBookDelectModal);
    } else if (updated[id].password !== cardPassword) {
      // setPasswordValidation(!passwordValidation); error 발생
    } else {
      // 공백 && 포커스를 가져길을때 === 비밀번호를 입력해주세요.
    }
  };

  // 방명록 모달 State, Function
  const [openGuestBookModal, setGuestModal] = useState(false);
  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };
  const addCard = (card: any) => {
    setCards((cards) => {
      const updated: any = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    setGuestModal(!openGuestBookModal);
  };

  // 체크박스 상태를 관리할 상태 변수
  const [showDday, setShowDday] = useState(true);

  return (
    <S.Wrapper>
      <S.ContentLeft>
        <Card type="preview">
          <TemplatePreview />
        </Card>
        <Card title="청첩장문구" type="preview">
          <InvitationPreview text={text}/>
        </Card>
        <Card title="예식일" type="preview">
          <WeddingDayPreview weddingDay={weddingDay} showDday={showDday} />
        </Card>
        <Card title="방명록" type="preview">
          <GuestBookPreview
            cards={cards}
            setGuestDelectModal={setGuestDelectModal}
            addPost={addPost}
            deleteCard={deleteCard}
            openGuestBookDelectModal={openGuestBookDelectModal}
            HandleGBDelectVisibility={HandleGBDelectVisibility}
            passwordValidation={passwordValidation}
            handleValidation={handleValidation}
            addCard={addCard}
            handleVisibility={handleVisibility}
            openGuestBookModal={openGuestBookModal}
          />
        </Card>
      </S.ContentLeft>

      <S.ContentRight>
        <Card title="템플릿">
          <TemplateWrite color={templateColor} type={templateType} />
        </Card>
        <Card color="white" title="예식일">
          <WeddingDayWrite weddingDay={weddingDay} setWeddingDay={setWeddingDay} />
        </Card>
        <Card title="첫 화면" />
        <Card color="white" title="첫 화면" />
        <Card title="청첩장 문구">
          <InvitationWrite text={text} textAreaRef={textAreaRef} handleChange={handleChange} showSampleText={showSampleText}  />
          <InvitationSampleTextModal openModal={openModal} showSampleText={showSampleText} sandContent={sandContent} />
        </Card>
        <Card title="보내는 사람" />
        <Card color="white" title="캘린더 스타일">
          <CalendarStyleWrite showDday={showDday} setShowDday={setShowDday} />
        </Card>
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
        <Card title="방명록">
          <GuestBookWrite />
        </Card>
        <Card title="추가 옵션" />
      </S.ContentRight>
      <S.ContentBottom>
        <S.SubmitButton onClick={handleSave}>저장하기</S.SubmitButton>
      </S.ContentBottom>
    </S.Wrapper>
  );
}
