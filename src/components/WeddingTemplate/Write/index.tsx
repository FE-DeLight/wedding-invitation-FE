import React from 'react';
import * as G from '@/styles/globals';
import Select from '@/components/Select';
import InputRadio from '@/components/Radio';
import InputCheckbox from '@/components/CheckBox';

const select = ['심플', '직접디자이하기'];
const type = ['A타입', 'B타입', 'C타입'];
const color = ['검정색', '빨강색', '흰색'];

export default function TemplateWrite() {
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>스타일</G.ColTitle>
        <G.ColContent>
          <Select options={select} />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <InputRadio data={type} name="templateType" />
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <InputCheckbox data={color} name="templateColor" />
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
