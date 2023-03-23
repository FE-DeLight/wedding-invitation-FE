'use client';

import InvitationPhrases from '@/components/InvitationPhrases';
import Priview from '@/components/priview';
import SampleModal from '@/components/SampleModal';

import React, { useState } from 'react';
import styled from '@emotion/styled';

const InvitaLayout = styled.div`
  display: flex;
`;

export default function useLayout() {
  const [openModal, setModal] = useState(false);
  const [text, setText] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setText({
        ...text,
        title: e.target.value,
      });
    } else {
      setText({
        ...text,
        content: e.target.value,
      });
    }

    console.log('최종 안에 들어있는 값은?:', text);
  };

  const showSampleText = () => {
    setModal(!openModal);
  };

  const sandContent = (e) => {
    console.log('sandCont', e.target.value);
    setModal(!openModal);
  };

  return (
    <>
      <InvitaLayout>
        <Priview text={text} />
        <div>
          <InvitationPhrases handleChange={handleChange} showSampleText={showSampleText} />
        </div>
      </InvitaLayout>
      <SampleModal openModal={openModal} showSampleText={showSampleText} sandContent={sandContent} />
    </>
  );
}
