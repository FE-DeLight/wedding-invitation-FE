import React, { useRef, useState } from 'react';
import * as SG from './guestBookDelectStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setCard, deleteCard, setOpenGuestBookDelectModal } from '@/store/guestBookSlice';

export default function GuestBookDelectModal({ id, password }: any) {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookDelectModal, cards } = guestBookState;

  const [passwordValidation, setPasswordValidation] = useState('');

  const handleValidation = () => {
    setPasswordValidation('');
  };
  const HandleGBDelectVisibility = () => {
    handleValidation();
    dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onChangeInput = (e: any) => {
    //   if (e.target.value > 0) {
    //     // 0 보다 크면서 값이 입력되어있으면 '비밀번호가 틀렸습니다'를 지워준다.
    //     // console.log('비밀번호가 틀렸습니다.');
    //     handleValidation();
    //   }
  };

  // 사용자입력된 값, prpos로 받아온 id, props로 받아온 password
  // const deleteCard = (cardPassword: any, id: any, propsPassword: any) => {
  // // 그리고,
  // if (updated[0].password === cardPassword) {
  //   // dispatch(
  //   //   setCard(() => {
  //   //     delete updated[0];
  //   //     return updated;
  //   //   }),
  //   // );
  //   dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
  // } else if (updated[id]?.password !== cardPassword) {
  //   // setPasswordValidation(!passwordValidation); error 발생
  // } else {
  //   // 공백 && 포커스를 가져길을때 === 비밀번호를 입력해주세요.
  // }
  // };

  const onSubmit = (event: any) => {
    console.log('onSubmit으로 들어옴', cards);
    event.preventDefault();
    // 저장을 눌렀는데, 만약 비밀번호가 공백 이라면 '입력해주세요 띄우기'
    // const passWord = passwordRef.current?.value;
    dispatch(deleteCard(cards)); // 사용자입력된 값, prpos로 받아온 id, props로 받아온 password
    // formRef.current?.reset();
  };

  return (
    <SG.ModalLayout>
      <SG.ModalHeader>
        <header>글 삭제</header>
        <button onClick={HandleGBDelectVisibility}>닫기</button>
      </SG.ModalHeader>
      <SG.ModalWrap>
        <SG.ModalBody ref={formRef} action="" method="post">
          <SG.SelectSample>
            <label>비밀번호</label>
            <input ref={passwordRef} type="password" placeholder="비밀번호" onChange={onChangeInput} />
          </SG.SelectSample>
          {passwordValidation && <SG.Validation>비밀번호가 틀렸습니다.</SG.Validation>}
        </SG.ModalBody>
        <SG.ModalBottom>
          <button onClick={HandleGBDelectVisibility}>닫기</button>
          <button onClick={onSubmit}>저장</button>
        </SG.ModalBottom>
      </SG.ModalWrap>
    </SG.ModalLayout>
  );
}
