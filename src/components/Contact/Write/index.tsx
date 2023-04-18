import React from 'react';
import * as S from './style';
import * as G from "@/styles/globals";
import { Checkbox, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Contact() {
  const [contact, setContact] = React.useState('신랑에게 연락하기');

  const handleChange = (event: SelectChangeEvent) => {
    setContact(event.target.value as string);
  };

  const stateModal = () => {
    console.log('Im in')
    // dispatch(setOpenGuestBookModal(!openGuestBookModal));
  };

  return (
    <>
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>버튼 이름</G.ColTitle>
        <G.ColContent>
          <G.RowItem>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              fullWidth
              value={contact}
              onChange={handleChange}
            >
              <MenuItem value="신랑에게 연락하기">신랑에게 연락하기</MenuItem>
              <MenuItem value="신부에게 연락하기">신부에게 연락하기</MenuItem>
              <MenuItem value="혼주에게 연락하기">혼주에게 연락하기</MenuItem>
            </Select>
          </G.RowItem>
        </G.ColContent>
      </G.Row>
      <S.Divider>
        <hr />
      </S.Divider>
      <G.Row>
        <G.ColTitle></G.ColTitle>
        <S.ColWrap>
          <S.NoContact>
            <ErrorOutlineIcon />
            <span>등록 된 연락처가 없습니다.</span>
          </S.NoContact>
        </S.ColWrap>
      </G.Row>
      <G.Row>
        <G.ColTitle>연락처</G.ColTitle>
        <S.ColWrap>
          <S.ColContent>
            <G.RowItem>
              <TextField size="small" fullWidth placeholder={"연락처"}/>
            </G.RowItem>
          </S.ColContent>
          <CloseIcon />
        </S.ColWrap>
      </G.Row>
      <G.Row>
        <G.ColTitle>연락처</G.ColTitle>
        <S.ColWrap>
          <S.ColContent>
            <S.GroupRowItem>
              <TextField size="small" fullWidth placeholder={"그룹"}/>
              <TextField size="small" fullWidth placeholder={"호칭"}/>
              <TextField size="small" fullWidth placeholder={"이름"}/>
              <TextField size="small" fullWidth placeholder={"연락처"}/>
            </S.GroupRowItem>
          </S.ColContent>
          <CloseIcon />
        </S.ColWrap>
      </G.Row>
      <S.Button onClick={stateModal}>
        <span>연락처 추가하기</span>
      </S.Button>
      <S.Divider>
        <hr />
      </S.Divider>
      <G.Row>
        <G.ColTitle></G.ColTitle>
        <G.ColContent>
            <p>※ 버튼에 소속 된 <strong>연락처가 2개 이상 일 경우</strong> 버튼이 <strong>팝업</strong>으로 대체됩니다.</p>
            <p>※ 팝업에서 <strong>그룹 명이 같은 경우</strong> 묶여서 표시됩니다.</p>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
    </>
  );
}
