import React from 'react';
import * as G from '@/styles/globals';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStyleOption } from '@/store/styleOptionSlice';

export default function CalendarStyleWrite() {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.styleOption.selectedOption);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Option = event.target.value;
    dispatch(setSelectedStyleOption(Option));
  };

  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>스타일</G.ColTitle>
        <G.ColContent>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="circle">원형</option>
            <option value="lined-circle">동그라미</option>
            <option value="heart">하트</option>
          </select>
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>디데이</G.ColTitle>
        <G.ColContent>ddd</G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
