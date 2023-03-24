'use client';

import InvitationPhrases from '@/components/InvitationPhrases';
import Priview from '@/components/preview';
import SampleModal from '@/components/SampleModal';
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import GuestBook from '@/components/GuestBook';

const Container = styled.div`
  display: flex;
`;

const InvitaLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Division = styled.div`
  margin-bottom: 48px;
`;

export default function useLayout() {
  const [openModal, setModal] = useState(false);
  const [text, setText] = useState({
    title: '',
    content: '',
  });
  const test = useRef();
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
  };
  const showSampleText = () => {
    setModal(!openModal);
  };
  const sandContent = (e) => {
    const content = e.target.innerHTML;
    const replaceSpace = content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    setModal(!openModal);
    setText({
      ...text,
      content: replaceSpace,
    });
  };

  return (
    <>
      <Container>
        {/* 가장 왼쪽에서 따로 분리돼서 동작 */}
        <Priview text={text} />
        {/* 오른쪽에서 보여지는 기능's */}
        <InvitaLayout>
          <Division>
            <InvitationPhrases text={text} test={test} handleChange={handleChange} showSampleText={showSampleText} />
          </Division>
          <Division>
            <GuestBook />
          </Division>
        </InvitaLayout>
      </Container>
      <SampleModal openModal={openModal} showSampleText={showSampleText} sandContent={sandContent} />
    </>
  );
}
