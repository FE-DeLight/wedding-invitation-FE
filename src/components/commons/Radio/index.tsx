import React from 'react';
import * as G from '@/styles/globals';

interface Props {
  data: Array<string>;
  name: string;
}

export default function InputRadio(props: Props) {
  return (
    <G.RadioGroup>
      {props?.data.map((item: any, index) => {
        return (
          <G.LabelRadio htmlFor={`${props?.name}_${index}`}>
            {item}
            <G.InputRadio type="radio" id={`${props?.name}_${index}`} name={props?.name} />
          </G.LabelRadio>
        );
      })}
    </G.RadioGroup>
  );
}
