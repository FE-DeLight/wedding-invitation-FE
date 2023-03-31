import React, { useState } from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import RadioInput from '@/components/Radio';
import Image from 'next/image';
import styled from '@emotion/styled';

type Props = {
  style: Array<object>;
  // type: Array<object>;
  type: any;
  color: Array<object>;
  setTemplateTypeSelect: any;
};

const TypeContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TypeButton = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  opacity: 0.5;
  transition: all 0.3s;
  &.active {
    opacity: 1;
  }
  img {
    width: 100%;
    height: auto;
  }
  span {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    color: #333;
  }
`;

export default function TemplateWrite(props: Props) {
  const [activeButton, setActiveButton] = useState();

  const handleClick = (index: any, value: string) => {
    setActiveButton(index);
    props?.setTemplateTypeSelect(value);
  };
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>스타일</G.ColTitle>
        <G.ColContent>
          <Select options={props?.style} />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <TypeContents>
            {props?.type.map((item: any, index: number) => {
              return (
                <TypeButton
                  type="button"
                  key={`templateType-${item.id}`}
                  onClick={() => handleClick(index, item.value)}
                  className={index === activeButton ? 'active' : ''}
                >
                  <Image
                    src={`/img/theme_sample_0${index}.png`}
                    alt={`템플릿 ${item.value} 타입`}
                    width={256}
                    height={445}
                    priority
                  />
                  <span>{item.value}</span>
                </TypeButton>
              );
            })}
          </TypeContents>
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <RadioInput options={props?.color} name="templatecolor" />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
