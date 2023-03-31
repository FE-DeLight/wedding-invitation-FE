import React from 'react';
import * as G from '@/styles/globals';
import styled from '@emotion/styled';
// import { getYear, getMonth, getDate, getDay } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: #f5f5f5;
  border: 1px solid #777;
  font-family: 'Noto Sans KR', sans-serif;
  color: grey;
  font-size: 14px;
  flex: 1 1 0;
`;

// [Todo] : 선택한 데이터 그냥 보내고 보여주는 곳에서 날짜 포맷해서 보여주기, moment.js 같은거 사용
export default function WeddingDay({ weddingDay, setWeddingDay }: any) {
  const onChange = (date: any) => {
    setWeddingDay(date);
  };

  return (
    <G.Row>
      <G.ColTitle>날짜</G.ColTitle>
      <G.ColContent>
        <CustomDatePicker
          selected={weddingDay}
          popperPlacement="bottom-start"
          locale="ko"
          minDate={new Date()}
          onChange={onChange}
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
