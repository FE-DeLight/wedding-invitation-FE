import * as S from './style';
import { IoIosClose } from "react-icons/io";
import GuestBookDelectModal from '../../Modal/GuestBookDelectModal';

// type CardProp = {
//   card: {
//     name: string;
//     time: string;
//     content: string;
//   };
// };

export default function Card({
  card,
  deleteCard,
  setGuestDelectModal,
  openGuestBookDelectModal,
  HandleGBDelectVisibility,
  passwordValidation,
  handleValidation,
}: any) {
  const { id, password, name, time, content } = card;
  const onSubmit = () => {
    setGuestDelectModal(!openGuestBookDelectModal);
  };

  return (
    <>
      <S.Cardli>
        <S.CardHeader>
          <h4>{name}</h4>
          <span>{time}</span>
          <button onClick={onSubmit}>
            <IoIosClose />
          </button>
        </S.CardHeader>
        <p>{content}</p>
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
      </S.Cardli>
    </>
  );
}
