/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';

const GuestBookContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: white;
`;

const GuestBookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #000;
  border-bottom: 1px solid #000;
  background-color: white;
`;

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0 24px;
`;
const GuestBookBody = styled.div`
  width: 100%;
  height: 57px; // 나중에 여기 변경해야됨
  color: #000;
  background-color: white;
  label {
    color: #000;
  }
`;
const handleClose = () => {
  // console.log('나들어옴');
};

export default function GuestBook() {
  return (
    <GuestBookContainer>
      <GuestBookHeader>
        <h3>방명록</h3>
        <button onClick={handleClose}>닫기</button>
      </GuestBookHeader>
      <BodyWrap>
        <GuestBookBody>
          <label>비밀번호 : </label>
          <input placeholder="삭제 비밀번호" />
        </GuestBookBody>
        ※ 방명록을 삭제할 때 필요한 비밀번호입니다.
      </BodyWrap>
    </GuestBookContainer>
  );
}
