import React from 'react';

export default function WeddingDayWrite({ formattedFullDate, formattedTime }: any) {
  return (
    <>
      <div>{formattedFullDate}</div>
      <div>{formattedTime}</div>
    </>
  );
}
