import React from 'react';
import * as G from '@/styles/globals';
import * as S from '@/components/WeddingDay/style';
// import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth, getDate, getDay } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

export default function WeddingDay({ startDate, setStartDate, setSelectedDate }: any) {
  function selectTime() {
    const Days = ['일', '월', '화', '수', '목', '금', '토'];
    const Year = getYear(startDate);
    const Month = getMonth(startDate) + 1;
    const Date = getDate(startDate);
    const Day = Days[getDay(startDate)];
    // const Time = format(startDate, 'a') === 'AM' ? '오전' : '오후';
    // const Hour = format(startDate, 'hh');
    // const Min = format(startDate, 'ss');

    setSelectedDate(String(`${Year}년 ${Month}월 ${Date}일 ${Day}요일`));
  }

  const handleDateChange = (date: any) => {
    setStartDate(date);
    selectTime();
  };

  return (
    <G.Row>
      <G.ColTitle>날짜</G.ColTitle>
      <G.ColContent>
        <S.CustomDatePicker
          selected={startDate}
          popperPlacement="bottom-start"
          // locale={ko}
          minDate={new Date()}
          onChange={handleDateChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={10}
          dateFormat="yyyy년 MM월 d일, aa h시 mm분"
        />
      </G.ColContent>
    </G.Row>
  );
}
