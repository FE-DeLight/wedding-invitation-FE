import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type Card = {
//   id: number;
//   name: string;
//   time: string;
//   content: string;
//   password: string;
// };

type AppState = {
  //   cards: Card[];
  openContactModal: boolean;
  //   openGuestBookDelectModal: boolean;
};

const initialState: AppState = {
  // 초기값 설정
  //   cards: [],
  openContactModal: false,
  //   openGuestBookDelectModal: false,
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState,
  reducers: {
    // setCard: (state, action: PayloadAction<Card>) => {
    //   state.cards.push(action.payload);
    // },
    // deleteCard: (state, action: PayloadAction<Card>) => {
    //   const Card = action.payload;
    //   return {
    //     ...state,
    //     cards: state.cards.filter((card) => console.log('cards :', card)),
    //   };
    // },
    setOpenContactModal: (state, action: PayloadAction<boolean>) => {
      state.openContactModal = action.payload;
    },
    // setOpenGuestBookDelectModal: (state, action: PayloadAction<boolean>) => {
    //   state.openGuestBookDelectModal = action.payload;
    // },
  },
});

// export const { setCard, deleteCard, setOpenGuestBookModal, setOpenGuestBookDelectModal } = contactSlice.actions;
export const { setOpenContactModal } = contactSlice.actions;

export default contactSlice.reducer;
