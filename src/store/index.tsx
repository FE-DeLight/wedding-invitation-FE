import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfo from './userInfoSlice';
import styleOptionSlice from './styleOptionSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    userInfo,
    styleOption: styleOptionSlice,
  },
});

export default store;
