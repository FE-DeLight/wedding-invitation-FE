import React from 'react';
import * as G from '@/styles/globals';

interface Props {
  data: Array<string>;
  name: string;
}

export default function InputCheckbox(props: Props) {
  return (
    <G.CheckboxGroup>
      {props?.data.map((item: any, index) => {
        return (
          <G.LabelCheckbox htmlFor={`${props?.name}_${index}`} key={item}>
            {item}
            <G.InputCheckbox type="checkbox" id={`${props?.name}_${index}`} name={props?.name} />
          </G.LabelCheckbox>
        );
      })}
    </G.CheckboxGroup>
  );
}
