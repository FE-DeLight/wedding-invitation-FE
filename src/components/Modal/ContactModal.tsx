import React, { useRef } from 'react';
import * as S from './ContactModalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenContactModal } from '@/store/contactSlice';

export default function ContactModal({ selectContact }) {
  console.log('Modal에 들어온 selectContact', selectContact);
  const { name, contact1 } = selectContact;

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
            {contact1.contact1.title}
            {contact1.contact1.name}
            {contact1.contact1.phone}
            {contact1.contact1.email}
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
