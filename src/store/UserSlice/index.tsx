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
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.nickname = '';
      state.email = '';
      state.token = '';
    },
  },
});

export default userSlice;
export const { setUser, removeUser } = userSlice.actions;
