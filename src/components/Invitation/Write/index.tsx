import React from 'react';
import * as G from '@/styles/globals';

export default function Index({ text, textAreaRef, handleChange, showSampleText }: any) {
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>제목</G.ColTitle>
        <G.ColContent>
          <G.InputText id="title" type="text" value={text.title} onChange={handleChange} />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>텍스트박스</G.ColTitle>
        <G.ColContent>
          <G.Textarea id="contents" ref={textAreaRef} onChange={handleChange} value={text.content} />
        </G.ColContent>
      </G.Row>
      <G.TextButton onClick={showSampleText}>
        <span>샘플 텍스트 보기</span>
      </G.TextButton>
    </G.RowWrap>
  );
}