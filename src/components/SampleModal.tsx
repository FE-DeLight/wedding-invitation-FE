/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #e5e5e5;
`;

const SelectSample = styled.div`
  border: 1px solid #000;
  margin: 5px;
  padding: 5px;
  text-align: center;
  color: black;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const ModalBody = styled.div`
  max-height: 275px;
  overflow-y: auto;
`;

export default function SampleModal({ openModal, showSampleText, sandContent }) {
  return (
    openModal && (
      <ModalLayout>
        <ModalHeader>
          <header>샘플테스트</header>
          <button onClick={showSampleText}>닫기</button>
        </ModalHeader>
        <ModalBody>
          <SelectSample onClick={sandContent}>
            평생을 함께하고 싶은 사람이 생겼습니다. <br />
            <br />
            처음처럼 변치않는 마음으로 서로 아끼며 예쁘게 살겠습니다.
            <br />
            <br />
            부디 함께하시어
            <br />
            저희의 하나됨을 따듯한 미소로 축복해주시기를 바랍니다.
          </SelectSample>
          <SelectSample onClick={sandContent}>
            서로 다른 두 사람이 만나 인생이라는 같은 길을 걷고자 합니다.
            <br />
            <br />
            모두가 어려운 시기, 결혼소식을 전하게 되어 마음이 무겁습니다.
            <br />
            참석이 어려우시더라도, 축복해주시는 마음에 감사함을 가지며 서로
            <br />더 존중하고 사랑하며 살겠습니다.
            <br />
            <br /> 신랑 신부 올림
          </SelectSample>
          <SelectSample onClick={sandContent}>
            더 이상 헤어지는 길을 아쉬워하고 싶지 않습니다.
            <br />
            <br />
            오랜 만남 끝에 저희 두 사람이 하나되는 날<br />
            귀한 분들을 모시고 평생의 서약을 올리고자 합니다.
            <br />
            <br />
            저희의 첫 시작을 내딛는 ㅇ월의 오후.
            <br />
            참석해주셔서 함께 축복해주시면 감사하겠습니다.
            <br />
            <br />
            신랑 신부 올림
          </SelectSample>
        </ModalBody>
      </ModalLayout>
    )
  );
}
