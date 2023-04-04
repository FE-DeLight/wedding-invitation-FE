import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  nickname: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  nickname: '',
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const item = state;
      item.nickname = action.payload.nickname;
      item.email = action.payload.email;
      item.token = action.payload.token;
    },
    removeUser: (state) => {
      const item = state;
      item.nickname = '';
      item.email = '';
      item.token = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice;
