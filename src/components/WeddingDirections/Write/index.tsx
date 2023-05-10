import React from 'react';
import * as G from '@/styles/globals';
import 'swiper/css';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { typeChange, alignChange } from '@/store/directionsSlice';

export default function DirectionsWrite() {
  const dispatch = useDispatch();

  const directionsTypeSelect = useSelector((state: any) => {
    return state.directions.type;
  });
  const directionsAlignSelect = useSelector((state: any) => {
    return state.directions.align;
  });
  const handleAddRow = () => {
    const newRow = { id: directionsTypeSelect.length + 1, title: '', desc: '' };
    dispatch(typeChange({ type: [...directionsTypeSelect, newRow] }));
  };

  const handleDeleteRow = (id: number) => {
    const updatedType = directionsTypeSelect.filter((item: any) => item.id !== id);
    dispatch(typeChange({ type: updatedType }));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, key: string) => {
    const { value } = event.target;
    const updatedType = directionsTypeSelect.map((item: any, idx: number) => {
      if (idx === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    dispatch(typeChange({ type: updatedType }));
  };
  const handleChangeAlign = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(alignChange({ align: value }));
  };
  return (
    <G.RowWrap>
      <G.Row>
        <G.ColTitle>텍스트</G.ColTitle>
        <G.ColContent>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={directionsAlignSelect}
            onChange={handleChangeAlign}
          >
            <FormControlLabel value="left" control={<Radio />} label="왼쪽정렬" />
            <FormControlLabel value="center" control={<Radio />} label="가운데정렬" />
          </RadioGroup>
        </G.ColContent>
      </G.Row>
      {directionsTypeSelect.map((row: any, index: number) => (
        <G.Row key={row?.id}>
          <G.ColTitle>안내 {index + 1}</G.ColTitle>
          <G.ColContent>
            <TextField
              defaultValue={row.title}
              placeholder="제목"
              fullWidth
              size="small"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event, index, 'title');
              }}
            />
            <TextField
              multiline
              fullWidth
              size="small"
              placeholder="내용"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event, index, 'desc');
              }}
            />
            <Button variant="outlined" color="error" onClick={() => handleDeleteRow(row.id)}>
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
