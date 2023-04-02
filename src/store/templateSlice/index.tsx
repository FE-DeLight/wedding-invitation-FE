import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: ' templateSlice',
  initialState: {
    type: 'A',
    color: 'rgb(6, 8, 15)',
    textColor: 'rgb(6, 8, 15)',
    BorderColor: 'rgb(6, 8, 15)',
    themeColor: 'rgb(6, 8, 15)',
  },
  reducers: {
    colorChange: (state, action) => {
      const item = state;
      item.color = action.payload.color;
      item.textColor = action.payload.textColor;
      item.BorderColor = action.payload.BorderColor;
      item.themeColor = action.payload.themeColor;
    },
    colorTextChange: (state, action) => {
      const item = state;
      item.textColor = action.payload.textColor;
    },
    colorBorderChange: (state, action) => {
      const item = state;
      item.BorderColor = action.payload.BorderColor;
    },
    colorThemeChange: (state, action) => {
      const item = state;
      item.themeColor = action.payload.themeColor;
    },
    typeChange: (state, action) => {
      const item = state;
      item.type = action.payload.type;
    },
  },
});

export default templateSlice;
export const { colorChange } = templateSlice.actions;
export const { colorTextChange } = templateSlice.actions;
export const { colorBorderChange } = templateSlice.actions;
export const { colorThemeChange } = templateSlice.actions;
export const { typeChange } = templateSlice.actions;
