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

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const item = state;
      item.nickname = action.payload.nickname;
      item.email = action.payload.email;
      item.token = action.payload.token;
    },
    resetUser: (state) => {
      const item = state;
      item.nickname = '';
      item.email = '';
      item.token = '';
    },
  },
});

export const { setUser, resetUser } = loginSlice.actions;

export default loginSlice.reducer;
