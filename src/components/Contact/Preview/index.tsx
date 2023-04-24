import React from 'react';
import * as S from './style';

import ContactModal from '@/components/Modal/ContactModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenContactModal } from '@/store/contactSlice';

export default function ContactPreview({ contacts, selectContact, setSelectContact }) {
  const contactList = Object.values(contacts);
  const dispatch = useDispatch();
  const contactState = useSelector((state: any) => state.contact);
  const { openContactModal } = contactState;

  const stateContactModal = (contactType) => {
    dispatch(setOpenContactModal(!openContactModal));
    if (contactType === 'groom') {
      setSelectContact({
        name: 'groom',
        contact1: {
          ...contactList[0],
        },
      });
    } else if (contactType === 'bride') {
      setSelectContact({
        name: 'bride',
        contact1: {
          ...contactList[1],
        },
      });
    } else {
      setSelectContact({
        name: 'host',
        contact1: {
          ...contactList[2],
        },
      });
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>마음 전하실 곳</S.Title>
        <S.Wrapper>
          <S.Button onClick={() => stateContactModal('groom')}>
            <span>신랑에게 연락하기</span>
          </S.Button>
          <S.Button onClick={() => stateContactModal('bride')}>
            <span>신부에게 연락하기</span>
          </S.Button>
          <S.Button onClick={() => stateContactModal('host')}>
            <span>혼주에게 연락하기</span>
          </S.Button>
        </S.Wrapper>
      </S.Container>
      <ContactModal selectContact={selectContact} />
    </>
  );
}
