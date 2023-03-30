import React from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import RadioInput from '@/components/Radio';
import CheckboxInput from '@/components/CheckBox';

const style = [
  { id: 1, value: '심플' },
  { id: 2, value: '직접디자이하기' },
];
const type = [
  { id: 1, value: 'A', check: false },
  { id: 2, value: 'B', check: false },
  { id: 3, value: 'C', check: false },
];
const color = [
  { id: 1, value: '검정색', check: false },
  { id: 2, value: '빨강색', check: false },
  { id: 3, value: '흰색', check: false },
];

export default function TemplateWrite() {
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>스타일</G.ColTitle>
        <G.ColContent>
          <Select options={style} />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <RadioInput options={type} name="templateType" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <CheckboxInput options={color} name="templatecolor" />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
