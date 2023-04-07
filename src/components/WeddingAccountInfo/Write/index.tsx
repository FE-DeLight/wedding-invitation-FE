import React from 'react';
import * as G from '@/styles/globals';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

export default function AccountInfoWrite() {
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>날짜</G.ColTitle>
        <G.ColContent>
          <TextField fullWidth placeholder="날짜" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>이름</G.ColTitle>
        <G.ColContent>
          <TextField fullWidth placeholder="신랑" />
          <TextField fullWidth placeholder="신부" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="자유입력" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>장소</G.ColTitle>
        <G.ColContent>
          <TextField fullWidth placeholder="장소" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>배경사진</G.ColTitle>
        <G.ColContent>
          <TextField fullWidth placeholder="장소" type="file" />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
