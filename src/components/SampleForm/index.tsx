import React, { useState } from 'react';
import * as G from '@/styles/globals';
import { Checkbox, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

export default function SampleFrom() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>타입</G.ColTitle>
        <G.ColContent>
          <G.RowItem>
            <TextField size="small" fullWidth />
            <TextField size="small" fullWidth />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </G.RowItem>
          <G.RowItem>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              fullWidth
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              fullWidth
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </G.RowItem>
          <G.RowItem>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
            </RadioGroup>
          </G.RowItem>
          <G.RowItem>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </G.RowItem>
        </G.ColContent>
      </G.Row>
      <G.Row>
        <G.ColTitle>색상</G.ColTitle>
        <G.ColContent>
          <G.RowItem>
            <TextField multiline fullWidth size="small" />
          </G.RowItem>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
