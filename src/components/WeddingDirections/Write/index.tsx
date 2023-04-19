import React, { useCallback, useState } from 'react';
import * as G from '@/styles/globals';
import 'swiper/css';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

export default function DirectionsWrite() {
  const [rows, setRows] = useState([
    {
      id: 1,
      title: '지하철',
      desc: '',
    },
    {
      id: 2,
      title: '버스',
      desc: '',
    },
    {
      id: 3,
      title: '자가용',
      desc: '',
    },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, title: '', desc: '' }]);
  };
  const handleDeleteRow = useCallback(
    (index: number) => {
      setRows((prevRows) => prevRows.filter((r, i) => i !== index));
    },
    [setRows],
  );
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>텍스트</G.ColTitle>
        <G.ColContent>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="left" control={<Radio />} label="왼쪽정렬" />
            <FormControlLabel value="right" control={<Radio />} label="오른쪽정렬" />
          </RadioGroup>
        </G.ColContent>
      </G.Row>
      {rows.map((row, index) => (
        <G.Row key={row?.id}>
          <G.ColTitle>안내 {index + 1}</G.ColTitle>
          <G.ColContent>
            <TextField value={row.title} placeholder="제목" fullWidth size="small" />
            <TextField multiline fullWidth size="small" placeholder="내용" />
            <Button variant="outlined" color="error" onClick={() => handleDeleteRow(index)}>
              삭제
            </Button>
          </G.ColContent>
        </G.Row>
      ))}

      <G.Row>
        <G.ColTitle />
        <G.ColContent>
          <Button variant="outlined" color="success" onClick={handleAddRow}>
            교통수단 추가
          </Button>
        </G.ColContent>
      </G.Row>
    </G.RowWrap>
  );
}
