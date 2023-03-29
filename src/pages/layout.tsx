/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */

'use client';

import InvitationPhrases from '@/components/InvitationPhrases';
import Priview from '@/components/preview';
import SampleModal from '@/components/SampleModal';
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import GuestBook from '@/components/GuestBook';
import MoreOption from '@/components/MoreOption';

const GlobalStyle = styled.div`
  background-color: green;
  font-size: ${({ fontSize }: any) => {
    return fontSize === '작게' ? '13px' : '18px'; // TODO : 차이 보기 위해 임시적으로 해놓음
  }};
  font-weight: ${({ fontWeight }: any) => {
    return fontWeight === '작게' ? '300' : '700'; // TODO : 400도 있음 -> 차이 보기 위해 임시적으로 해놓음
  }};
  font-family: ${({ fontFamily }: any) => {
    return fontFamily === '나눔명조' ? 'Noto Sans KR' : 'Dongle'; // TODO : 나중에 font 추가 시키기 그리고 상의해보기
  }};
`;

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
    size: '작게',
  });

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
      // handleFontSize(value.size);
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

  return (
    <>
      <Container>
        {/* 가장 왼쪽에서 따로 분리돼서 동작 */}
        <GlobalStyle fontSize={optionData.size} fontWeight={optionData.size} fontFamily={optionData.famliy}>
          <Priview text={text} />
        </GlobalStyle>
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
