import React, { useState } from 'react';
import * as G from '@/styles/formStyles';

type Props = {
  options: Array<object>;
  name: string;
};

function CheckboxInput(props: Props) {
  const numCheckboxes = props?.options.length;
  const [checkboxes, setCheckboxes] = useState<Array<boolean>>(new Array(numCheckboxes).fill(false));

  const handleChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  return (
    <G.CheckboxGroup>
      {props?.options.map((option: any, index: any) => (
        <G.RadioLabel htmlFor={`${props?.name}-${index}`} key={`${props?.name}-${option.id}`}>
          <G.CheckboxInput
            id={`${props?.name}-${index}`}
            type="checkbox"
            name={`checkbox-group-${props?.name}`}
            value={option.value}
            checked={checkboxes[index]}
            onChange={() => handleChange(index)}
          />
          {option.value}
        </G.RadioLabel>
      ))}
    </G.CheckboxGroup>
  );
}

export default CheckboxInput;
