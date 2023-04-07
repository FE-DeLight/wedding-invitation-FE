import React from 'react';
import * as G from '@/styles/globals';
import { useDispatch, useSelector } from 'react-redux';
import { setSenderForm } from '@/store/userInfoSlice';
import { TextField, FormControlLabel, Checkbox, Box, Stack, Divider } from '@mui/material';

export default function SenderWrite() {
  const dispatch = useDispatch();
  const senderForm = useSelector((state: any) => state.user.senderForm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const [senderType, senderKey, subKey] = name.split('.');
    if (!senderType || !senderKey) return;

    const updatedSenderForm = {
      ...senderForm,
      [senderType]: {
        ...senderForm[senderType],
        [senderKey]: !subKey
          ? value
          : {
              ...senderForm[senderType][senderKey],
              [subKey]: type === 'checkbox' ? checked : value,
            },
      },
    };
    dispatch(setSenderForm(updatedSenderForm));
  };

  return (
    <Box>
      <Stack direction="row">
        <G.ColTitle>신랑</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="male.name" onChange={handleInputChange} />
          <TextField
            variant="outlined"
            value={senderForm.male.relationship}
            name="male.relationship"
            onChange={handleInputChange}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <G.ColTitle>아버지</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="male.father.name" onChange={handleInputChange} />
          <FormControlLabel
            control={<Checkbox name="male.father.isDeceased" onChange={handleInputChange} />}
            label="고인"
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <G.ColTitle>어머니</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="male.mother.name" onChange={handleInputChange} />
          <FormControlLabel
            control={<Checkbox name="male.mother.isDeceased" onChange={handleInputChange} />}
            label="고인"
          />
        </Stack>
      </Stack>

      <Divider />
      <Stack direction="row">
        <G.ColTitle>신부</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="female.name" onChange={handleInputChange} />
          <TextField
            variant="outlined"
            value={senderForm.female.relationship}
            name="female.relationship"
            onChange={handleInputChange}
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <G.ColTitle>아버지</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="female.father.name" onChange={handleInputChange} />
          <FormControlLabel
            control={<Checkbox name="female.father.isDeceased" onChange={handleInputChange} />}
            label="고인"
          />
        </Stack>
      </Stack>
      <Stack direction="row">
        <G.ColTitle>어머니</G.ColTitle>
        <Stack direction="row">
          <TextField variant="outlined" name="female.mother.name" onChange={handleInputChange} />
          <FormControlLabel
            control={<Checkbox name="female.mother.isDeceased" onChange={handleInputChange} />}
            label="고인"
          />
        </Stack>
      </Stack>
      <Divider />
      <Box>
        <p>※ 아버님, 어머님의 정보는 빈칸으로 두시면 생략이 가능합니다.</p>
      </Box>
    </Box>
  );
}
