import React from 'react';
import * as G from '@/styles/globals';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '@/store/invitationSlice';

export default function Index({ openModal, setModal }: any) {
  // 받아와야 되는 기존 props : { text, textAreaRef, handleChange, showSampleText }: any
  const dispatch = useDispatch();
  const { text } = useSelector((state: any) => state.invitation); // Redux 스토어의 상태 가져오기

  const handleChange = (e: any) => {
    if (e.target.id === 'title') {
      dispatch(
        setText({
          ...text,
          title: e.target.value,
        }),
      );
    } else {
      dispatch(
        setText({
          ...text,
          content: e.target.value,
        }),
      );
    }
  };

  const showSampleText = () => {
    setModal(!openModal);
  };

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
          {/* 아래 Textarea 의 ref={textAreaRef}  라고 있었다. */}
          <G.Textarea id="contents" onChange={handleChange} value={text.content} />
        </G.ColContent>
      </G.Row>
      <G.TextButton onClick={showSampleText}>
        <span>샘플 텍스트 보기</span>
      </G.TextButton>
    </G.RowWrap>
  );
}
