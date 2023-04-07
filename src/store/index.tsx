import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userSlice from './userSlice';
import styleOptionSlice from './styleOptionSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userSlice.reducer,
    styleOption: styleOptionSlice,
  },
});

export default store;
