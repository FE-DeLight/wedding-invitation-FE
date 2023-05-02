import { createSlice } from '@reduxjs/toolkit';

const directionsSlice = createSlice({
  name: ' directionsSlice',
  initialState: {
    type: [
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
    ],
    align: 'left',
  },
  reducers: {
    typeChange: (state, action) => {
      const item = state;
      item.type = action.payload.type;
    },
    alignChange: (state, action) => {
      const item = state;
      item.align = action.payload.align;
    },
  },
});

export default directionsSlice.reducer;
export const { typeChange } = directionsSlice.actions;
export const { alignChange } = directionsSlice.actions;
