import React, { useRef } from 'react';
import * as S from './ContactModalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenContactModal } from '@/store/contactSlice';

export default function ContactModal({ selectContact }) {
  console.log('Modal에 들어온 selectContact', selectContact);
  const { name, contact } = selectContact;
  // console.log('name, contact :', name, contact.contact.contact1, contact.contact.contact2);

  let headerText = '';

  const dispatch = useDispatch();
  const contactState = useSelector((state: any) => state.contact);
  const { openContactModal } = contactState;

  const stateModal = () => {
    dispatch(setOpenContactModal(!openContactModal));
  };
  switch (name) {
    case 'groom':
      headerText = '신랑에게 연락하기';
      break;
    case 'bride':
      headerText = '신부에게 연락하기';
      break;
    case 'host':
      headerText = '혼주에게 연락하기';
      break;
    default:
      headerText = '';
      break;
  }

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    // onSubmit 함수에서 유효성 체크 검사 해야될 것 같음!
    // const card = {
    //   id: Date.now(), // uuid
    //   name: nameRef.current?.value || '',
    //   password: passwordRef.current?.value || '',
    // };

    formRef.current?.reset();
    // dispatch(setCard(card));
    stateModal();
  };

  return (
    openContactModal && (
      <S.ModalLayout>
        <S.ModalHeader>
          <header>{headerText}</header>
          <S.IconButton onClick={stateModal}>닫기</S.IconButton>
        </S.ModalHeader>
        <S.ModalWrap>
          <S.ModalBody ref={formRef} action="" method="post">
            {contact.contact.contact1.title}
            {contact.contact.contact1.name}
            {contact.contact.contact1.phone}
            {contact.contact.contact1.email}
            {/* 
            {contact.contact.contact2.title}
            {contact.contact.contact2.name}
            {contact.contact.contact2.phone}
            {contact.contact.contact2.email}
             */}
          </S.ModalBody>
          <S.ModalBottom>
            <button onClick={stateModal}>닫기</button>
            <button onClick={onSubmit}>저장</button>
          </S.ModalBottom>
        </S.ModalWrap>
      </S.ModalLayout>
    )
  );
}
