import * as S from './style';
import Card from './Card';

export default function PrevewCard({
  cards,
  deleteCard,
  openGuestBookDelectModal,
  HandleGBDelectVisibility,
  setGuestDelectModal,
  passwordValidation,
  handleValidation,
}: any) {
  return (
    <S.CardUl>
      {Object.keys(cards).length === 0
        ? <S.CardEmpty>축하 메시지를 남겨주세요 !</S.CardEmpty>
        : Object.keys(cards).map((key) => (
            <Card
              key={key}
              card={cards[key]}
              deleteCard={deleteCard}
              openGuestBookDelectModal={openGuestBookDelectModal}
              HandleGBDelectVisibility={HandleGBDelectVisibility}
              setGuestDelectModal={setGuestDelectModal}
              passwordValidation={passwordValidation}
              handleValidation={handleValidation}
            />
          ))}
    </S.CardUl>
  );
}
