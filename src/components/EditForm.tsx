import React from 'react';
import styled from '@emotion/styled';
import GuestBook from '@/components/GuestBook/GuestBook';
import MoreOption from '@/components/MoreOption/MoreOption';

const Division = styled.div`
  margin-bottom: 48px;
`;

export default function EditForm({ optionData, handleMoreOption, HandleAllLayout, components, setComponents }: any) {
  return (
    <>
      <Division>
        <GuestBook />
      </Division>
      <Division>
        <MoreOption
          optionData={optionData}
          handleMoreOption={handleMoreOption}
          components={components}
          onClick={HandleAllLayout}
          setComponents={setComponents}
        />
      </Division>
    </>
  );
}
