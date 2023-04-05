import React, { useState } from 'react';
import * as G from '@/styles/globals';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStyleOption, StyleOption } from '@/store/styleOptionSlice';

export default function CalendarStyleWrite({ showDday, setShowDday }: any) {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => (state as any).styleOption.selectedOption);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const Option: StyleOption = event.target.value as StyleOption;
    dispatch(setSelectedStyleOption(Option));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDday(event.target.checked); // 체크박스의 체크 여부에 따라 상태 변수를 업데이트
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
        <G.ColContent>
          <label>
            <input type="checkbox" name="showDday" checked={showDday} onChange={handleCheckboxChange} />
            캘린터 하단에 D-Day를 표시합니다.
          </label>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
