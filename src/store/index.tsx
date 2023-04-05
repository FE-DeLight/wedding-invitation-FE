import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfo from './userInfoSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    userInfo,
  },
});

export default store;
