import React from 'react';
import { formatDate, formatTime } from '@/utils/dateUtils';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

export default function WeddingDayWrite({ weddingDay }: any) {
  registerLocale('ko', ko);

  const formattedDate = formatDate(weddingDay, 'M월 D일');
  const formattedFullDate = formatDate(weddingDay, 'YYYY년 M월 D일');
  const formattedTime = formatTime(weddingDay);

  const getDateDiffFromToday = (date: Date): number => {
    const today = moment();
    const targetDate = moment(date);
    return targetDate.diff(today, 'days');
  };
  const dateDiff = getDateDiffFromToday(weddingDay);

  return (
    <>
      <div>{formattedDate}</div>
      <DatePicker
        selected={weddingDay}
        locale={ko}
        inline
        dayClassName={
          (date: Date) => (date.getDay() === 0 ? 'preview-react-datepicker__day--sun' : null) // 일요일 빨간색 설정
        }
        calendarClassName="preview-react-datepicker"
        shouldCloseOnSelect={false}
      />
      <div>
        {formattedFullDate} {formattedTime}
      </div>
      <div>
        <span> ♥ </span>
        <span> 의 결혼식이</span>
        <span> {dateDiff}일 </span>
        <span>남았습니다.</span>
      </div>
    </>
  );
}
