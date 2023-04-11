import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InvitationState = {
  openModal: boolean;
  // textAreaRef: any; // 이 부분은 리덕스와 관련이 없기 때문에 따로 분리되지 않습니다.
  text: {
    title: string;
    content: string;
  };
};

const initialState: InvitationState = {
  openModal: false,
  // textAreaRef: null,
  text: {
    title: '초대합니다',
    content: '[청첩장 문구]에 내용을 입력해 주세요.',
  },
};

const invitationSlice = createSlice({
  name: 'invitationSlice',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    setText: (state, action: PayloadAction<{ title: string; content: string }>) => {
      state.text = action.payload;
    },
  },
});

export const { setModal, setText } = invitationSlice.actions;

export default invitationSlice.reducer;
