import * as S from './style';
import Card from './Card';
import { useSelector } from 'react-redux';

export default function PrevewCard() {
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { cards } = guestBookState;

  return (
    <S.CardUl>
      {Object.keys(cards).length === 0 ? (
        <S.CardEmpty>축하 메시지를 남겨주세요 !</S.CardEmpty>
      ) : (
        Object.keys(cards).map((key) => <Card key={key} card={cards[key]} />)
      )}
    </S.CardUl>
  );
}
