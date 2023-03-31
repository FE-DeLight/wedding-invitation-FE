import React from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import RadioInput from '@/components/Radio';
import Image from 'next/image';

type Props = {
  style: Array<object>;
  type: Array<object>;
  color: Array<object>;
};

export default function TemplateWrite(props: Props) {
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
          {/* <RadioInput options={props?.type} name="templateType" /> */}
          <div className="typeContent">
            <div>
              {/* <Image src="/img/theme_sample_00.png" alt="Vercel Logo" layout="fill" priority /> */}
              <span>A</span>
            </div>
          </div>
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
