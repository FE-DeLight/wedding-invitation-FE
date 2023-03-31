import React from 'react';
import * as G from '@/styles/globals';
import styled from '@emotion/styled';
import { getYear, getMonth, getDate, getDay } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 20px;
  background-color: #f5f5f5;
  border: 1px solid #777;
  font-family: 'Noto Sans KR', sans-serif;
  color: grey;
  font-size: 14px;
  flex: 1 1 0;
`;

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
        <CustomDatePicker
          selected={startDate}
          popperPlacement="bottom-start"
          locale="ko"
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
          placeholderText="클릭하여 날짜를 변경하세요."
        />
      </G.ColContent>
    </G.Row>
  );
}
