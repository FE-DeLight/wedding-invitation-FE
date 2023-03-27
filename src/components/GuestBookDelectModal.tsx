/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import styled from '@emotion/styled';

const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 157px;
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

export default function GuestBookDelectModal({ HandleGBDelectVisibility, deleteCard }) {
  const formRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const passWord = passwordRef.current.value;
    console.log(passWord);
    deleteCard(passWord);
    // formRef.current.reset();
  };

  return (
    <ModalLayout>
      <ModalHeader>
        <header>글 삭제</header>
        <button onClick={HandleGBDelectVisibility}>닫기</button>
      </ModalHeader>
      <ModalWrap>
        <ModalBody ref={formRef} action="" method="post">
          <SelectSample>
            <label>비밀번호</label>
            <input ref={passwordRef} type="password" placeholder="비밀번호" />
          </SelectSample>
        </ModalBody>
        <ModalBottom>
          <button onClick={HandleGBDelectVisibility}>닫기</button>
          <button onClick={onSubmit}>저장</button>
        </ModalBottom>
      </ModalWrap>
    </ModalLayout>
  );
}
