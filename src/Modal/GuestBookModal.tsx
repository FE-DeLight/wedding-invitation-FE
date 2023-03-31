/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const ModalWrap = styled.div`
  padding: 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #e5e5e5;
`;

const ModalBody = styled.form`
  //
`;

const SelectSample = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  color: black;
  margin-bottom: 16px;
  label {
    color: black;
    width: 80px;
    text-align: start;
  }

  input,
  textarea {
    width: 100%;
  }
`;

const ModalBottom = styled.div`
  text-align: end;

  button {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default function GuestBookModal({ openGuestBookModal, handleVisibility, addCard }) {
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

  const onSubmit = (event) => {
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
      <ModalLayout>
        <ModalHeader>
          <header>방명록</header>
          <button onClick={handleVisibility}>닫기</button>
        </ModalHeader>
        <ModalWrap>
          <ModalBody ref={formRef} action="" method="post">
            <SelectSample>
              <label>작성자</label>
              <input ref={nameRef} type="text" placeholder="작성자" />
            </SelectSample>
            <SelectSample>
              <label>내용</label>
              <textarea ref={contentRef} placeholder="내용" />
            </SelectSample>
            <SelectSample>
              <label>비밀번호</label>
              <input ref={passwordRef} type="password" placeholder="비밀번호" />
            </SelectSample>
          </ModalBody>
          <ModalBottom>
            <button onClick={handleVisibility}>닫기</button>
            <button onClick={onSubmit}>저장</button>
          </ModalBottom>
        </ModalWrap>
      </ModalLayout>
    )
  );
}
