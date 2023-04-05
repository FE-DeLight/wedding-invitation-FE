import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import styleOptionSlice from './styleOptionSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    styleOption: styleOptionSlice,
  },
});

export default store;
