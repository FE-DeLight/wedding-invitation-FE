/* eslint-disable react/no-unknown-property */
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
const Validation = styled.div`
  color: red;
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

export default function GuestBookDelectModal({
  id,
  password,
  HandleGBDelectVisibility,
  deleteCard,
  passwordValidation,
  handleValidation,
}) {
  const formRef = useRef();
  const passwordRef = useRef(null);
  const onChangeInput = (e) => {
    if (e.target.value > 0) {
      // 0 보다 크면서 값이 입력되어있으면 '비밀번호가 틀렸습니다'를 지워준다.
      console.log('비밀번호가 틀렸습니다.');
      handleValidation();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // 저장을 눌렀는데, 만약 비밀번호가 공백 이라면 '입력해주세요 띄우기'
    const passWord = passwordRef.current.value;
    deleteCard(passWord, id, password);
    formRef.current.reset();
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
            <input ref={passwordRef} autoFocus type="password" placeholder="비밀번호" onChange={onChangeInput} />
          </SelectSample>
          {passwordValidation && <Validation>비밀번호가 틀렸습니다.</Validation>}
        </ModalBody>
        <ModalBottom>
          <button onClick={HandleGBDelectVisibility}>닫기</button>
          <button onClick={onSubmit}>저장</button>
        </ModalBottom>
      </ModalWrap>
    </ModalLayout>
  );
}
