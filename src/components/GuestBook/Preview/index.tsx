import React from 'react';
import * as S from './style';
import PrevewCard from '@/components/GuestBook/Preview/PrevewCard';
import GuestBookModal from '@/components/Modal/GuestBookModal';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenGuestBookModal } from '@/store/guestBookSlice';

export default function Index() {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookModal } = guestBookState;

  const stateModal = () => {
    dispatch(setOpenGuestBookModal(!openGuestBookModal));
  };
  return (
    <S.InvitationWrap>
      <S.PrevewCardHeader>
        <S.Title>
          <span>방명록</span>
        </S.Title>
      </S.PrevewCardHeader>
      <S.PrevewCardBody>
        <PrevewCard />
        <hr />
        <S.Button onClick={stateModal}>
          <BsFillPencilFill size={12} /> <span>방명록 남기기</span>
        </S.Button>
      </S.PrevewCardBody>
      <GuestBookModal />
    </S.InvitationWrap>
  );
}
