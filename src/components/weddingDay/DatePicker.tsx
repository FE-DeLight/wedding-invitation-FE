import styled from '@emotion/styled';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getMonth, getDate, getDay, subDays } from 'date-fns';

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

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (date) => {
    setStartDate(date);
    selectTime();
  };

  function selectTime() {
    let Days = ['일', '월', '화', '수', '목', '금', '토'];
    let Month = getMonth(startDate) + 1;
    let Date = getDate(startDate);
    let Day = Days[getDay(startDate)];
    setSelectedDate(String(Month + '.' + Date + ' (' + Day + ')'));
    console.log(selectedDate);
  }

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
