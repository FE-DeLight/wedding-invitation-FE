import React, { useRef } from 'react';
import * as G from '@/styles/globals';

export default function Index() {

  const PasswordRef = useRef(null);

  return (
    <G.RowWrap>
      <G.Row>
        {/* TODO : GuestBook의 비밀번호는 저장할 떄 담겨야된다.*/}
        <G.ColTitle>비밀번호</G.ColTitle>
        <G.ColContent>
          <G.InputText id="title" type="text" ref={PasswordRef} />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
