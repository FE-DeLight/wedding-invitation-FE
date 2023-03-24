/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from '@emotion/styled';

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

export default function GuestBookModal({ openGuestBookModal, handleVisibility }) {
  return (
    openGuestBookModal && (
      <ModalLayout>
        <ModalHeader>
          <header>방명록</header>
          <button onClick={handleVisibility}>닫기</button>
        </ModalHeader>
        <ModalWrap>
          <ModalBody action="" method="post">
            <SelectSample>
              <label>작성자</label>
              <input type="text" placeholder="작성자" />
            </SelectSample>
            <SelectSample>
              <label>내용</label>
              <textarea placeholder="내용" />
            </SelectSample>
            <SelectSample>
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호" />
            </SelectSample>
          </ModalBody>
          <ModalBottom>
            <button onClick={handleVisibility}>닫기</button>
            <button>저장</button>
          </ModalBottom>
        </ModalWrap>
      </ModalLayout>
    )
  );
}
