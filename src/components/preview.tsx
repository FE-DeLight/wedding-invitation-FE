/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useState } from 'react';
import GuestBookModal from './Modal/GuestBookModal';
import PrevewCard from './GuestBook/Preview/PrevewCard';

const BoxLayout = styled.div`
  flex-shrink: 0;
  max-height: 621px;
  padding: 20px 20px;
  overflow-y: scroll;
`;

const InvitationPhrasesLayout = styled.div`
  width: 270px;
  height: 300px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
  overflow: hidden; //나눔명조 적용시, 크기가 ...
  overflow-y: auto;
  background-color: #f5f5f5;
  background-image: ${({ backgroundImage } :any) => {
    return backgroundImage === '없음' ? 'none' : "url('/assets/images/pattern_1.png')";
  }};

  p {
    white-space: pre-wrap;
  }
`;

const GuestBookLayout = styled.div`
  width: 270px;
  height: 300px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #f5f5f5;
`;

const TestLayout = styled.div`
  width: 270px;
  height: 300px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  background-image: ${({ backgroundImage }:any) => {
    return backgroundImage === '없음' ? 'none' : "url('/assets/images/pattern_1.png')";
  }};
`;

export default function usePriview({ text, backgroundImage } :any) {

  // 방명록 모달
  const [openGuestBookModal, setGuestModal] = useState(false);
  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };

  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    setGuestModal(!openGuestBookModal);
  };

  // 방명록 데이터
  const [cards, setCards] = useState({});
  const [openGuestBookDelectModal] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState('');

  const HandleGBDelectVisibility = () => {
    handleValidation();
    setGuestDelectModal(!openGuestBookDelectModal);
  };

  const handleValidation = () => {
    setPasswordValidation('');
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




  const detailDate = (a) => {
    const updated = a;
    Object.keys(updated).forEach((item) => {
      const now = dayjs();
      const year = now.year();
      const month = now.month();
      const date = now.date();
      const minute = now.minute(); // 분
      // const second = now.second();
      const stringYear = year.toString();
      const stringMonth = month.toString();
      const stringDate = date.toString();
      const stringMinute = minute.toString();
      const dateResult = [stringYear, stringMonth, stringDate, stringMinute].join('');
      const milliSeconds = dateResult;
      const seconds = milliSeconds / 1000;
      if (seconds < 0) setCards((updated[item].time = '방금 전'));
    });
  };

  detailDate({ ...cards });

  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };

  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };







  return (
    <BoxLayout>
      {/* 청첩장 문구 */}
      <InvitationPhrasesLayout backgroundImage={backgroundImage}>
        <div className="invitation-phrases">
          <p>{text.title}</p>
        </div>
        <div>
          <p>{text.content}</p>
        </div>
      </InvitationPhrasesLayout>
      {/* 방명록 */}
      <GuestBookLayout>
        <h3>방명록</h3>
        <PrevewCard
          cards={cards}
          setGuestDelectModal={setGuestDelectModal}
          deleteCard={deleteCard}
          openGuestBookDelectModal={openGuestBookDelectModal}
          HandleGBDelectVisibility={HandleGBDelectVisibility}
          passwordValidation={passwordValidation}
          handleValidation={handleValidation}
        />
        <button onClick={addPost}>방명록 남기기</button>
        <GuestBookModal
          openGuestBookModal={openGuestBookModal}
          handleVisibility={handleVisibility}
          addCard={addCard} />
      </GuestBookLayout>
      {/* 배경지를 위한 Test */}
      <TestLayout backgroundImage={backgroundImage}>
        <h3>테스트</h3>
      </TestLayout>
    </BoxLayout>
  );
}
