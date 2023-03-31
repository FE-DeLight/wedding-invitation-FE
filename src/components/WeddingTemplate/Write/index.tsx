import React, { useState } from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import RadioInput from '@/components/Radio';
import Image from 'next/image';
import styled from '@emotion/styled';

type Props = {
  style: Array<object>;
  type: Array<object>;
  color: Array<object>;
};

const TypeButton = styled.button`
  max-width: 200px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

export default function TemplateWrite(props: Props) {
  const [activeButton, setActiveButton] = useState();

  const handleClick = (index: any) => {
    setActiveButton(index);
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
          {props?.type.map((item: any, index: number) => {
            return (
              <TypeButton
                type="button"
                key={`templateType-${item.id}`}
                onClick={() => handleClick(index)}
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
          <div className="typeContent" />
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
