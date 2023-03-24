/* eslint-disable react/button-has-type */
import React from 'react';

const handleClose = () => {
  console.log('나들어옴');
};

export default function GuestBook() {
  return (
    <div className="guestbook">
      <h3>방명록</h3>
      <button onClick={handleClose}>닫기</button>
    </div>
  );
}
