/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import { useState } from 'react';
import GuestBookModal from './GuestBookModal';

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvitationPhrasesLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
  color: black;
  margin-bottom: 10px;
`;

const GuestBookLayout = styled.div`
  width: 150px;
  height: 250px;
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

  const addPost = () => {
    setGuestModal(!openGuestBookModal);
  };

  const handleVisibility = () => {
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
        <span>축하 메시지를 남겨주세요 !</span>
        <button onClick={addPost}>방명록 남기기</button>
        <GuestBookModal openGuestBookModal={openGuestBookModal} handleVisibility={handleVisibility} />
      </GuestBookLayout>
    </BoxLayout>
  );
}
