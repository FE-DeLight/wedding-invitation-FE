/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvitationPhrasesLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
  color: black;
  margin-bottom: 10px;
`;

const GuestBookLayout = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f5f5f5;
`;

type PriviewProps = {
  text: {
    title: string;
    content: string;
  };
};

export default function priview({ text }: PriviewProps) {
  return (
    <BoxLayout>
      <InvitationPhrasesLayout>
        <div className="invitation-phrases">
          <p>{text.title}</p>
        </div>
        <div>
          <p>{text.content}</p>
        </div>
      </InvitationPhrasesLayout>
      <GuestBookLayout>{/* 방명록 클릭시 열기 <-> 닫기 */}</GuestBookLayout>
    </BoxLayout>
  );
}
