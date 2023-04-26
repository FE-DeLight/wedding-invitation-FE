import * as S from './style';
import CloseIcon from '@mui/icons-material/Close';
import GuestBookDelectModal from '../../Modal/GuestBookDelectModal';
import { setOpenGuestBookDelectModal, setId } from '@/store/guestBookSlice';

import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

export default function Card({ card }: any) {
  const dispatch = useDispatch();
  const guestBookState = useSelector((state: any) => state.guestBook);
  const { openGuestBookDelectModal } = guestBookState;

  const { id, name, time, content } = card;
  const onSubmit = () => {
    dispatch(setOpenGuestBookDelectModal(!openGuestBookDelectModal));
  };

  const now = dayjs();
  const diff = now.diff(time);
  let timeText = '';
  if (diff < 60000) {
    timeText = '방금전';
  } else if (diff < 3600000) {
    const diffMinute = Math.floor(diff / 60000);
    timeText = `${diffMinute}분전`;
  } else if (diff < 86400000) {
    const diffHour = Math.floor(diff / 3600000);
    timeText = `${diffHour}시간전`;
  } else {
    const diffDay = Math.floor(diff / 86400000);
    timeText = `${diffDay}일전`;
  }

  return (
    <>
      <S.Cardli>
        <S.CardHeader>
          <h4>{name}</h4>
          <span>{timeText}</span>
          <button onClick={onSubmit}>
            <CloseIcon fontSize="small" onClick={() => dispatch(setId(id))} />
          </button>
        </S.CardHeader>
        <p>{content}</p>
        {openGuestBookDelectModal && <GuestBookDelectModal />}
      </S.Cardli>
    </>
  );
}
