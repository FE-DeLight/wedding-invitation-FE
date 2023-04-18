import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum StyleOption {
  Circle = 'circle',
  LinedCircle = 'lined-circle',
  Heart = 'heart',
}

export interface StyleOptionState {
  selectedStyleOption: StyleOption;
}

const initialState: StyleOptionState = {
  selectedStyleOption: StyleOption.Circle,
};

const styleOptionSlice = createSlice({
  name: 'styleOption',
  initialState,
  reducers: {
    setSelectedStyleOption: (state, action: PayloadAction<StyleOption>) => {
      const item = state;
      item.selectedStyleOption = action.payload;
    },
  },
});

export const { setSelectedStyleOption } = styleOptionSlice.actions;

export default styleOptionSlice.reducer;
