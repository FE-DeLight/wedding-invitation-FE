import React from 'react';
import { formatDate, formatTime } from '@/utils/dateUtils';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import * as S from '@/components/WeddingDay/Preview/style';

export default function WeddingDayWrite({ weddingDay }: any) {
  registerLocale('ko', ko);

  const formattedDate = formatDate(weddingDay, 'M월 D일');
  const formattedFullDate = formatDate(weddingDay, 'YYYY년 M월 D일 dddd');
  const formattedTime = formatTime(weddingDay);

  const getDateDiffFromToday = (date: Date): number => {
    const today = moment().startOf('day');
    const targetDate = moment(date).startOf('day');

    return targetDate.diff(today, 'days');
  };
  const dateDiff = getDateDiffFromToday(weddingDay);

  return (
    <>
      <S.Title>{formattedDate}</S.Title>
      <DatePicker
        selected={weddingDay}
        locale={ko}
        inline
        dayClassName={(date: Date) => {
          const isOutsideMonth = date.getMonth() !== weddingDay.getMonth();
          const isSunday = date.getDay() === 0;

          if (isOutsideMonth) {
            return 'react-datepicker__day--disabled react-datepicker__day--outside-month';
          }

          if (isSunday) {
            return 'react-datepicker__day--sun';
          }

          return null;
        }}
        calendarClassName="preview-react-datepicker"
      />
      <S.Wrapper>
        <S.Date>
          {formattedFullDate} {formattedTime}
        </S.Date>
        <S.Dday>
          <span className="red"> ♥ </span>
          <span> 의 결혼식이</span>
          <span className="red"> {dateDiff}일 </span>
          <span>남았습니다.</span>
        </S.Dday>
      </S.Wrapper>
    </>
  );
}
