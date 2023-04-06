import React from 'react';
import * as S from './style';
import PrevewCard from "@/components/GuestBook/Preview/PrevewCard";
import GuestBookModal from "@/components/Modal/GuestBookModal";

export default function Index({
  cards,
  deleteCard,
  addPost,
  openGuestBookDelectModal,
  HandleGBDelectVisibility,
  setGuestDelectModal,
  passwordValidation,
  handleValidation,
  addCard,
  handleVisibility,
  openGuestBookModal,
}: any) {
  return (
    <S.InvitationWrap>
      <S.PrevewCardHeader >
        <S.Title>
          <span>방명록</span>
        </S.Title>
      </S.PrevewCardHeader>
      <S.PrevewCardBody>
        <PrevewCard
          cards={cards}
          deleteCard={deleteCard}
          openGuestBookDelectModal={openGuestBookDelectModal}
          HandleGBDelectVisibility={HandleGBDelectVisibility}
          setGuestDelectModal={setGuestDelectModal}
          passwordValidation={passwordValidation}
          handleValidation={handleValidation}
        />
        <hr />
        <S.Button onClick={addPost}>
          <span>방명록 남기기</span>
        </S.Button>
      </S.PrevewCardBody>
      <GuestBookModal
        openGuestBookModal={openGuestBookModal}
        handleVisibility={handleVisibility}
        addCard={addCard}
      />
    </S.InvitationWrap>
  );
}
