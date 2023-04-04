import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
