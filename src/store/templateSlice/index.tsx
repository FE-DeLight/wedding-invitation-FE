import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: ' templateSlice',
  initialState: {
    type: 'A',
    color: 'rgb(6, 8, 15)',
  },
  reducers: {
    colorChange: (state, action) => {
      const item = state;
      item.color = action.payload.color;
    },
    typeChange: (state, action) => {
      const item = state;
      item.type = action.payload.type;
    },
  },
});

export default templateSlice;
export const { colorChange } = templateSlice.actions;
export const { typeChange } = templateSlice.actions;
