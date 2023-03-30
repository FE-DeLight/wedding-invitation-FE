import React from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import RadioInput from '@/components/Radio';
import CheckboxInput from '@/components/CheckBox';

type Props = {
  style: Array<object>;
  styleChange: any;
  type: Array<object>;
  typeChange: any;
  color: Array<object>;
  colorChange: any;
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
          <RadioInput options={props?.type} name="templateType" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <CheckboxInput options={props?.color} name="templatecolor" />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
