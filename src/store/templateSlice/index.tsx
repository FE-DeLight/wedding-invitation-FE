import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: ' templateSlice',
  initialState: {
    templateStyle: {
      type: 'A',
      color: 'rgb(6, 8, 15)',
      textColor: 'rgb(6, 8, 15)',
      BorderColor: 'rgb(6, 8, 15)',
      themeColor: 'rgb(6, 8, 15)',
    },
    type: 'A',
    color: 'rgb(6, 8, 15)',
    textColor: 'rgb(6, 8, 15)',
    BorderColor: 'rgb(6, 8, 15)',
    themeColor: 'rgb(6, 8, 15)',
  },
  reducers: {
    changeTemplate: (state, actions) => {
      state.templateStyle = { ...actions.payload };
    },
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
export const { changeTemplate, colorChange, colorTextChange, colorBorderChange, colorThemeChange, typeChange } =
  templateSlice.actions;
