import React, { useRef } from 'react';
import * as S from './GuestBookStyle';
import dayjs from 'dayjs';


export default function GuestBookModal({ openGuestBookModal, handleVisibility, addCard } :any) {
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

  const formRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (event :any) => {
    event.preventDefault();
    // onSubmit 함수에서 유효성 체크 검사 해야될 것 같음!
    const card = {
      id: Date.now(), // uuid
      name: nameRef.current.value || '',
      time: dateResult, // 여기는 무조건 그 고정값을 가져와야돼!
      content: contentRef.current.value || '',
      password: passwordRef.current.value || '',
    };

    formRef.current.reset();
    addCard(card);
  };

  return (
    openGuestBookModal && (
      <S.ModalLayout>
        <S.ModalHeader>
          <header>방명록</header>
          <S.IconButton onClick={handleVisibility}>닫기</S.IconButton>
        </S.ModalHeader>
        <S.ModalWrap>
          <S.ModalBody ref={formRef} action="" method="post">
            <S.SelectSample>
              <label>작성자</label>
              <input ref={nameRef} type="text" placeholder="작성자" />
            </S.SelectSample>
            <S.SelectSample>
              <label>내용</label>
              <textarea ref={contentRef} placeholder="내용" />
            </S.SelectSample>
            <S.SelectSample>
              <label>비밀번호</label>
              <input ref={passwordRef} type="password" placeholder="비밀번호" />
            </S.SelectSample>
          </S.ModalBody>
          <S.ModalBottom>
            <button onClick={handleVisibility}>닫기</button>
            <button onClick={onSubmit}>저장</button>
          </S.ModalBottom>
        </S.ModalWrap>
      </S.ModalLayout>
    )
  );
}
