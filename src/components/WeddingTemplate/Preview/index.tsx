import React from 'react';
import styled from '@emotion/styled';

type Props = {
  templateTypeSelect: any;
};

const TypeWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  & > div {
    width: 100%;
    min-height: 300px;
  }
`;
const Type = styled.div`
  height: 500px;
  transition: all 0.3s;
  &.typeA {
  }
  &.typeB {
    & .imgArea {
      top: 140px;
    }
    & .title {
      padding-top: 30px;
    }
  }
  &.typeC {
    & .imgArea {
      top: 110px;
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
    }
    & .title {
      padding-top: 10px;
    }
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  max-width: 250px;
  margin: 0 auto;
  padding-top: 20px;
  transition: all 0.3s;
`;
const Name = styled.span`
  font-size: 20px;
`;

const ImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  transition: all 0.3s;
  background-color: #eee;
  &:before {
    position: absolute;
    inset: 10px;
    border: 2px solid #666;
    content: '';
  }
  &:after {
    position: absolute;
    inset: 14px;
    border: 1px solid #666;
    content: '';
  }
`;
export default function TemplatePreview(props: Props) {
  return (
    <>
      <TypeWrap>
        <Type className={`type${props?.templateTypeSelect}`}>
          <Title className="title">
            <Name>신랑 이름</Name>
            <span>&</span>
            <Name>신부 이름</Name>
          </Title>
          <ImgArea className="imgArea">[첫화면]에서 이미지를 넣어주세요.</ImgArea>
        </Type>
      </TypeWrap>
      <div>dsa</div>
    </>
  );
}
