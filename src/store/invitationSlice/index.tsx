import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InvitationState = {
  text: {
    title: string;
    content: string;
  };
};

const initialState: InvitationState = {
  text: {
    title: '초대합니다',
    content: '[청첩장 문구]에 내용을 입력해 주세요.',
  },
};

const invitationSlice = createSlice({
  name: 'invitationSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<{ title: string; content: string }>) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = invitationSlice.actions;

export default invitationSlice.reducer;
