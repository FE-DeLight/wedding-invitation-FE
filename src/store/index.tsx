import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfoSlice from './userInfoSlice';
import loginSlice from './loginSlice';
import styleOptionSlice from './styleOptionSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userInfoSlice,
    login: loginSlice,
    styleOption: styleOptionSlice,
  },
});

export default store;
