import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

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
  color: ${(props) => props.color};
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
  text-align: center;
  &:before {
    position: absolute;
    inset: 10px;
    border: 2px solid ${(props) => props.color};
    content: '';
  }
  &:after {
    position: absolute;
    inset: 14px;
    border: 1px solid ${(props) => props.color};
    content: '';
  }
  &.imgArea {
    &:before,
    &:after {
      display: none;
    }
  }
`;
export default function TemplatePreview() {
  const templateColorSelect = useSelector((state: any) => {
    return state.template.color;
  });
  const templateTypeSelect = useSelector((state: any) => {
    return state.template.type;
  });
  return (
    <>
      <TypeWrap>
        <Type className={`type${templateTypeSelect}`} color={templateColorSelect}>
          {templateTypeSelect !== 'Img' ? (
            <Title className="title">
              <Name>신랑 이름</Name>
              <span>&</span>
              <Name>신부 이름</Name>
            </Title>
          ) : (
            ''
          )}
          <ImgArea className="imgArea" color={templateColorSelect}>
            {templateTypeSelect !== 'Img' ? (
              '[첫화면]에서 이미지를 넣어주세요.'
            ) : (
              <>
                [첫화면]에서 이미지를 넣어주세요.
                <br /> (1:1.7 비율을 권장합니다.)
              </>
            )}
          </ImgArea>
        </Type>
      </TypeWrap>
      <div>dsa</div>
    </>
  );
}
