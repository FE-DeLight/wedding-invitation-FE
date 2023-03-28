/* eslint-disable @typescript-eslint/no-shadow */

'use client';

import InvitationPhrases from '@/components/InvitationPhrases';
import Priview from '@/components/preview';
import SampleModal from '@/components/SampleModal';
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import GuestBook from '@/components/GuestBook';
import MoreOption from '@/components/MoreOption';

const Container = styled.div`
  display: flex;
`;

const InvitaLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-height: 621px;
  padding: 20px 20px;
  background-color: tomato;
`;

const Division = styled.div`
  margin-bottom: 48px;
`;

export default function useLayout() {
  const [openModal, setModal] = useState(false);
  // InvitationPhrases사용되는 State
  const [text, setText] = useState({
    title: '',
    content: '',
  });

  // 추가옵션 State
  const [optionData, setOptionData] = useState({
    background: '없음',
    famliy: '나눔명조',
    size: '보통',
  }); // useState('디자인하우스');

  const test = useRef();

  // InvitationPhrases 컴포넌트 사용되는 함수
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

  // MoreOption컴포넌트로부터 온 value
  const handleMoreOption = (value: any) => {
    const family = Object.keys(value).includes('famliy');
    const size = Object.keys(value).includes('size');
    if (family) {
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.famliy = value.famliy;
        return updated;
      });
    } else if (size) {
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.size = value.size;
        return updated;
      });
    } else {
      setOptionData((optionData) => {
        const updated = { ...optionData };
        updated.background = value.background;
        return updated;
      });
    }
  };

  // 각 설정에 맞는 value값 설정하기!
  const getStyles = (value: any) => {};

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
          <Division>
            <MoreOption optionData={optionData} handleMoreOption={handleMoreOption} />
          </Division>
        </InvitaLayout>
      </Container>
      <SampleModal openModal={openModal} showSampleText={showSampleText} sandContent={sandContent} />
    </>
  );
}
