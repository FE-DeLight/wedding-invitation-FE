import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfoSlice from './userInfoSlice';
import loginSlice from './loginSlice';
import styleOptionSlice from './styleOptionSlice';
import invitationSlice from './invitationSlice';
import guestBookSlice from './guestBookSlice';
import contactSlice from './contactSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userInfoSlice,
    login: loginSlice,
    styleOption: styleOptionSlice,
    invitation: invitationSlice,
    guestBook: guestBookSlice,
    contact: contactSlice,
  },
});

export default store;
