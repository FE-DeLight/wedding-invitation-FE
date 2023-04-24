import React from 'react';
import * as S from './style';

import ContactModal from '@/components/Modal/ContactModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenContactModal } from '@/store/contactSlice';

export default function ContactPreview({ contacts }) {
  const dispatch = useDispatch();
  const contactState = useSelector((state: any) => state.contact);
  const { openContactModal } = contactState;

  const stateContactModal = () => {
    console.log('Modal실행');
    dispatch(setOpenContactModal(!openContactModal));
  };
  console.log('contacts : ', contacts);
  return (
    <>
      <S.Container>
        <S.Title>마음 전하실 곳</S.Title>
        <S.Wrapper>
          <S.Button onClick={stateContactModal}>
            <span>신랑에게 연락하기</span>
          </S.Button>
          <S.Button onClick={stateContactModal}>
            <span>신부에게 연락하기</span>
          </S.Button>
          <S.Button onClick={stateContactModal}>
            <span>혼주에게 연락하기</span>
          </S.Button>
        </S.Wrapper>
      </S.Container>
      <ContactModal />
    </>
  );
}
