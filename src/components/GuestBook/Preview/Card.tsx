import * as S from './style';
import { IoIosClose } from 'react-icons/io';
import GuestBookDelectModal from '../../Modal/GuestBookDelectModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenGuestBookDelectModal } from '@/store/guestBookSlice';

export default function Card({ card }: any) {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookDelectModal } = guestBookState;

  const { id, password, name, time, content } = card;
  const onSubmit = () => {
    dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
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
        {openGuestBookDelectModal && <GuestBookDelectModal id={id} password={password} />}
      </S.Cardli>
    </>
  );
}
