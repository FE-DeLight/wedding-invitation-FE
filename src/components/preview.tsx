/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import { useState } from 'react';
import GuestBookModal from './GuestBookModal';
import PrivewCard from './PrivewCard';

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvitationPhrasesLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
  color: black;
  text-align: center;
  margin-bottom: 10px;
  p {
    white-space: pre;
  }
`;

const GuestBookLayout = styled.div`
  width: 150px;
  height: 250px;
  text-align: center;
  background-color: #f5f5f5;
`;

type PriviewProps = {
  text: {
    title: string;
    content: string;
  };
};

export default function usePriview({ text }: PriviewProps) {
  const [openGuestBookModal, setGuestModal] = useState(false);
  const [cards, setCards] = useState({
    // '1': {
    //   id: '1',
    //   name: 'Elin1',
    //   content: '축하해요!',
    //   password: '1111',
    // },
    // '2': {
    //   id: '2',
    //   name: 'Anna',
    //   content: '축하합니다ㅏㅏㅏㅏ!',
    //   password: '1111',
    // },
  });

  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };

  const handleVisibility = () => {
    setGuestModal(!openGuestBookModal);
  };

  const addCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card; // key를 card.id로 두겠다!
      return updated;
    });
    setGuestModal(!openGuestBookModal);
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
        <PrivewCard cards={cards} />
        <button onClick={addPost}>방명록 남기기</button>
        <GuestBookModal openGuestBookModal={openGuestBookModal} handleVisibility={handleVisibility} addCard={addCard} />
      </GuestBookLayout>
    </BoxLayout>
  );
}
