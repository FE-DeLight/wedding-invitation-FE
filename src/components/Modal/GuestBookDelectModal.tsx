import React, { useRef } from 'react';
import * as S from './style';
import * as SG from './guestBookStyle';

export default function GuestBookDelectModal({
  id,
  password,
  HandleGBDelectVisibility,
  deleteCard,
  passwordValidation,
  handleValidation,
}: any) {
  const formRef = useRef();
  const passwordRef = useRef(null);
  const onChangeInput = (e:any) => {
    if (e.target.value > 0) {
      // 0 보다 크면서 값이 입력되어있으면 '비밀번호가 틀렸습니다'를 지워준다.
      // console.log('비밀번호가 틀렸습니다.');
      handleValidation();
    }
  };

  const onSubmit = (event :any) => {
    event.preventDefault();
    // 저장을 눌렀는데, 만약 비밀번호가 공백 이라면 '입력해주세요 띄우기'
    const passWord = passwordRef.current.value;
    deleteCard(passWord, id, password);
    formRef.current.reset();
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
