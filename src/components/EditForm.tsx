import React from 'react';
import styled from '@emotion/styled';
import InvitationPhrases from '@/components/Invitation/InvitationPhrases';
import GuestBook from '@/components/GuestBook/GuestBook';
import MoreOption from '@/components/MoreOption/MoreOption';

const Division = styled.div`
  margin-bottom: 48px;
`;

export default function EditForm({
  text,
  test,
  handleChange,
  showSampleText,
  optionData,
  handleMoreOption,
  HandleAllLayout,
  components,
  setComponents,
}: any) {
  return (
    <>
      <Division>
        <InvitationPhrases text={text} test={test} handleChange={handleChange} showSampleText={showSampleText} />
      </Division>
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
