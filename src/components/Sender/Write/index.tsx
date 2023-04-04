import React from 'react';
import * as G from '@/styles/globals';
import styled from '@emotion/styled';

export default function SenderWrite() {
  return (
    <>
      <G.RowWrap>
        <G.Row>
          <G.ColTitle>신랑</G.ColTitle>
          <G.InputText id="title" type="text" />
          <G.InputText id="title" type="text" />
        </G.Row>
        <G.Row>
          <G.ColTitle>아버지</G.ColTitle>
          <G.ColContent>
            <G.InputText id="title" type="text" />
          </G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>어머니</G.ColTitle>
          <G.ColContent>
            <G.InputText id="title" type="text" />
          </G.ColContent>
        </G.Row>
      </G.RowWrap>
      <G.RowWrap>
        <G.Row>
          <G.ColTitle>신부</G.ColTitle>
          <G.ColContent>sss</G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>아버지</G.ColTitle>
          <G.ColContent>고고고</G.ColContent>
        </G.Row>
        <G.Row>
          <G.ColTitle>날짜</G.ColTitle>
          <G.ColContent>sss</G.ColContent>
        </G.Row>
      </G.RowWrap>
    </>
  );
}
