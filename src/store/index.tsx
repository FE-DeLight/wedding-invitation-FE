import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfoSlice from './userInfoSlice';
import loginSlice from './loginSlice';
import styleOptionSlice from './styleOptionSlice';
import invitationSlice from './invitationSlice';
import guestBookSlice from './guestBookSlice';
import addressSlice from './addressSlice';
import directionsSlice from './directionsSlice';

const store = configureStore({
  reducer: {
    template: templateSlice,
    user: userInfoSlice,
    login: loginSlice,
    styleOption: styleOptionSlice,
    invitation: invitationSlice,
    guestBook: guestBookSlice,
    address: addressSlice,
    directions: directionsSlice,
  },
});

export default store;
