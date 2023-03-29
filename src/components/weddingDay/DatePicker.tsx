import styled from '@emotion/styled';
import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth, getDate, getDay } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const SelectArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
  padding-bottom: 24px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #525252;
  width: 12%;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 12px;
  background-color: #f5f5f5;
  border: 1px solid rgba(229, 229, 229);
  color: rgba(115, 115, 115);
  font-size: 15px;
  line-height: 15px;
  flex: 1 1 0;
`;

export default function DatePickerComponent({ startDate, setStartDate, setSelectedDate }: any) {
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
    <SelectArea>
      <Label>날짜</Label>
      <CustomDatePicker
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
    </SelectArea>
  );
}
