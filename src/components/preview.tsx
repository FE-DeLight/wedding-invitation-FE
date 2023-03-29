/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import GuestBookModal from './GuestBookModal';
import PrivewCard from './PrivewCard';

const BoxLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 20px 20px;
`;

const InvitationPhrasesLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
  color: black;
  text-align: center;
  margin-bottom: 10px;
  p {
    white-space: pre-wrap;
  }
`;

const GuestBookLayout = styled.div`
  width: 150px;
  height: 250px;
  text-align: center;
  background-color: #f5f5f5;
`;

const MoreOptionLayout = styled.div``;

type PriviewProps = {
  text: {
    title: string;
    content: string;
  };
};

export default function usePriview({ text }: PriviewProps) {
  const [openGuestBookModal, setGuestModal] = useState(false);
  const [openGuestBookDelectModal, setGuestDelectModal] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState('');
  const [cards, setCards] = useState({
    // '1': {
    //   id: '1',
    //   name: 'Elin1',
    //   time: '방금 전, 1분, 2분 / ',12132424
    //   content: '축하해요!',
    //   password: '1111',
    // },
    // '2': {
    //   id: '2',
    //   time: '20분',
    //   name: 'Anna',
    //   content: '축하합니다ㅏㅏㅏㅏ!',
    //   password: '1111',
    // },
  });

  // 즉, 따라서 이 컴포넌트가 reRandering이 되면, 자동갱신이므로 여기에서 직접해주면됨.
  // useEffect(() => {

  // console.log('useEffect안의 :', { cards: {} });
  // setCards((cards) => {
  //   const updated = { ...cards };
  //   // cards를 모두 복사해왔으니까
  //   console.log('updated :', updated);
  // });

  // console.log('useEffect안의 updated', updated.167980691728);
  // 해당 컴포넌트가 마운트될때,
  // 다시 한번
  // timestamp();
  // });

  // 해당함수는 이전 시간 - 현재시간
  // 근데 retuen 될때는 아 변수로 되어있으니까 ! 상괌없네!  문자열은 따로 적어주는구나!오키!
  // 쌓이는데로 두고, 추가되는 시간을 넣어서,
  // 1분이 지나면 time에 있는 시간과 계산해서 보여주는형식!
  const detailDate = (a) => {
    const updated = a;
    Object.keys(updated).forEach((item) => {
      // console.log('itemitemitemitemitemitem', item); // key를 가져옴
      // console.log('a[item]a[item]a[item]a[item]a[item]a[item].time:', a[item].time);
      // console.log('여기여기', updated[item].id, parseInt(updated[item].time));
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
      // 현재 time에서 계산된 값을 바로 업데이트 시켜준다.
      // 즉 만들어진 시간이랑 updated[item].time랑 - 해준다.
      console.log('dateResult', updated[item].time, dateResult);

      // const milliSeconds = parseInt(updated[item].time) - parseInt(dateResult);
      // const seconds = milliSeconds / 1000;
      // // // 저 계산된 seconds 값을 먼저 if문으로 한 후 updated[item].time에 넣어준다.
      // if (seconds < 0) setCards((updated[item].time = '방금 전'));

      // updated[item].time = seconds; // 전체적으로 카드를 만들면, 계산된 값으로 출력된다.

      // console.log('최종값최종값최종값최종값최종값최종값', updated, updated[item].time);
      // console.log(updated[item].time);
      // setCards(() => {
      //   return
      // })
      // 출력된 값으로 이제 아래처럼 계산해주면될듯.
      // if (updated[item].time < 0) '방금 전';

      // console.log('milliSeconds', seconds);
      // console.log('updated[item].time:', updated[item].time);

      // console.log('함수나가기전[][][][][][] ', updated);
      // return updated;
    });

    // 그리고 함수에서 실행되는 return 할때 card 바꾼 것을 바로 업데이트해준다.

    // const minutes = seconds / 60;
    // if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    // const hours = minutes / 60;
    // if (hours < 24) return `${Math.floor(hours)}시간 전`;
    // const days = hours / 24;
    // if (days < 7) return `${Math.floor(days)}일 전`;
    // const weeks = days / 7;
    // if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    // const months = days / 30;
    // if (months < 12) return `${Math.floor(months)}개월 전`;
    // const years = days / 365;
    // return `${Math.floor(years)}년 전`;
  };

  // useEffect(() => {
  detailDate({ ...cards });
  // }, [detailDate]);

  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };

  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };

  // passwordValidation
  const handleValidation = () => {
    setPasswordValidation('');
  };

  const HandleGBDelectVisibility = () => {
    handleValidation();
    setGuestDelectModal(!openGuestBookDelectModal);
  };

  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      console.log('updated[card.id] : ', updated, card.id); // 왜 1679805878395 지?
      updated[card.id] = card; // key를 card.id로 두겠다!
      return updated;
    });
    setGuestModal(!openGuestBookModal);
  };

  const deleteCard = (cardPassword, id, password) => {
    console.log(password);
    const updated = { ...cards }; // card를 받아온다.
    if (updated[id].password === cardPassword) {
      // 비밀번호가 알맞을시 수행됨.
      setCards(() => {
        delete updated[id];
        return updated;
      });
      setGuestDelectModal(!openGuestBookDelectModal);
    } else if (updated[id].password !== cardPassword) {
      // 잘못입력 === 비밀번호가 틀렸습니다.
      setPasswordValidation(!passwordValidation);
    } else {
      // 공백 && 포커스를 가져길을때 === 비밀번호를 입력해주세요.
    }
  };

  return (
    <BoxLayout>
      <InvitationPhrasesLayout>
        <div className="invitation-phrases">
          <p>{text.title}</p>
        </div>
        <div>
          <p>{text.content}</p>
        </div>
      </InvitationPhrasesLayout>
      <GuestBookLayout>
        <h3>방명록</h3>
        <PrivewCard
          cards={cards}
          setGuestDelectModal={setGuestDelectModal}
          deleteCard={deleteCard}
          openGuestBookDelectModal={openGuestBookDelectModal}
          HandleGBDelectVisibility={HandleGBDelectVisibility}
          passwordValidation={passwordValidation}
          handleValidation={handleValidation}
        />
        <button onClick={addPost}>방명록 남기기</button>
        <GuestBookModal openGuestBookModal={openGuestBookModal} handleVisibility={handleVisibility} addCard={addCard} />
      </GuestBookLayout>
      <MoreOptionLayout />
    </BoxLayout>
  );
}

export const useTimeStamp = (timestamp) => {
  console.log('들어옴');
  const [timeAgo, setTimeAgo] = useState('');

  const updateTimeStamp = () => {
    // 경과한 시간 계산 (1초 = 1000)
    const timeElapsed = Math.floor((new Date() - new Date(timestamp)) / 1000);

    if (timeElapsed < 60) {
      setTimeAgo(`방금 전`);
    } else if (timeElapsed < 60 * 60) {
      const minutes = Math.floor(timeElapsed / 60);
      setTimeAgo(`${minutes}분 전`);
    } else if (timeElapsed < 60 * 60 * 24) {
      const hours = Math.floor(timeElapsed / (60 * 60));
      setTimeAgo(`${hours}시간 전`);
    } else if (timeElapsed < 60 * 60 * 24 * 7) {
      const days = Math.floor(timeElapsed / (60 * 60 * 24));
      setTimeAgo(`${days}일 전`);
    } else {
      // 일주일 이상 지난 아이템에 대해서는 YYYY-MM-DD로 표기
      const date = new Date(timestamp).toISOString().slice(0, 10);
      setTimeAgo(date);
    }
  };

  useEffect(() => {
    updateTimeStamp();
  }, [timestamp]);

  return timeAgo;
};
