import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfoSlice from './userInfoSlice';
import loginSlice from './loginSlice';
import styleOptionSlice from './styleOptionSlice';
import invitationSlice from './invitationSlice';
import addressSlice from './addressSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userInfoSlice,
    login: loginSlice,
    styleOption: styleOptionSlice,
    invitation: invitationSlice,
    address: addressSlice,
  },
});

export default store;
