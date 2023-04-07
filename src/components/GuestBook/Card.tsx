/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import GuestBookDelectModal from '../Modal/GuestBookDelectModal';

const Cardli = styled.li`
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  background-color: #fff;
  p {
    text-align: start;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

type CardProp = {
  card: {
    name: string;
    time: string;
    content: string;
  };
};

export default function Card({
  card,
  deleteCard,
  setGuestDelectModal,
  openGuestBookDelectModal,
  HandleGBDelectVisibility,
  passwordValidation,
  handleValidation,
}: CardProp) {
  const { id, password, name, time, content } = card;
  const onSubmit = () => {
    console.log('들어왔다');
    setGuestDelectModal(!openGuestBookDelectModal);
  };

  return (
    <>
      <Cardli>
        <CardHeader>
          <h4>{name}</h4>
          <span>{time}</span>
          <button onClick={onSubmit}>닫기</button>
        </CardHeader>
        <p>{content}</p>
      </Cardli>
      {openGuestBookDelectModal && (
        <GuestBookDelectModal
          id={id}
          password={password}
          HandleGBDelectVisibility={HandleGBDelectVisibility}
          deleteCard={deleteCard}
          passwordValidation={passwordValidation}
          handleValidation={handleValidation}
        />
      )}
    </>
  );
}