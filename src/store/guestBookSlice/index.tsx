import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
  id: number;
  name: string;
  time: string;
  content: string;
  password: string;
};

type AppState = {
  cards: Card[];
  openGuestBookModal: boolean;
  openGuestBookDelectModal: boolean;
};

const initialState: AppState = {
  // 초기값 설정
  cards: [],
  openGuestBookModal: false,
  openGuestBookDelectModal: false,
};

const guestBookSlice = createSlice({
  name: 'guestBookSlice',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<Card>) => {
      const Card = action.payload;

      // console.log('redux로 들어온 card : ', Card[0].password);
      return {
        ...state,
        cards: state.cards.filter((card) => console.log('cards :', card)),
        // cards: state.cards.filter((card) => card.password !== Card.password),
      };
    },
    setOpenGuestBookModal: (state, action: PayloadAction<boolean>) => {
      state.openGuestBookModal = action.payload;
    },
    setOpenGuestBookDelectModal: (state, action: PayloadAction<boolean>) => {
      state.openGuestBookDelectModal = action.payload;
    },
  },
});

export const { setCard, deleteCard, setOpenGuestBookModal, setOpenGuestBookDelectModal } = guestBookSlice.actions;

export default guestBookSlice.reducer;
