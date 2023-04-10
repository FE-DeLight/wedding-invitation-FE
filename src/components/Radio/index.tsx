import React, { useState, ChangeEvent } from 'react';
import * as G from '@/styles/formStyles';

type Props = {
  options: Array<object>;
  name: string;
};

function RadioInput(props: Props) {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <G.RadioGroup>
      {props?.options.map((option: any, index: any) => (
        <G.RadioLabel htmlFor={`${props?.name}-${index}`} key={`${props?.name}-${option.id}`}>
          <G.RadioInput
            type="radio"
            id={`${props?.name}-${index}`}
            name={`radio-group-${props?.name}`}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.value}
        </G.RadioLabel>
      ))}
    </G.RadioGroup>
  );
}

export default RadioInput;
