import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateType {
  senderForm: SenderFormState;
}

export interface SenderFormState {
  male: SenderFormStateItem;
  female: SenderFormStateItem;
}

export interface SenderFormStateItem {
  name: string;
  relationship: string;
  mother: {
    name: string;
    isDeceased: boolean;
  };
  father: {
    name: string;
    isDeceased: boolean;
  };
}

const initialState: InitialStateType = {
  senderForm: {
    male: {
      name: '',
      relationship: '',
      mother: {
        name: '',
        isDeceased: false,
      },
      father: {
        name: '',
        isDeceased: false,
      },
    },
    female: {
      name: '',
      relationship: '',
      mother: {
        name: '',
        isDeceased: false,
      },
      father: {
        name: '',
        isDeceased: false,
      },
    },
  },
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setSenderForm: (state, action) => {
      const item = state;
      item.senderForm = action.payload;
    },
  },
});

export const { setSenderForm } = userInfoSlice.actions;

export default userInfoSlice.reducer;
