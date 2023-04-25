import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
  id: number;
  name: string;
  time: string;
  content: string;
  password: string;
};

type DeleteCard = {
  id: number;
};
type AppState = {
  cards: Card[];
  openGuestBookModal: boolean;
  openGuestBookDelectModal: boolean;
  id: DeleteCard;
};

const initialState: AppState = {
  // 초기값 설정
  cards: [],
  openGuestBookModal: false,
  openGuestBookDelectModal: false,
  id: 0,
};

const guestBookSlice = createSlice({
  name: 'guestBookSlice',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    setId: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload;
      state.id = id;
    },
    deleteCard: (state, action: PayloadAction<DeleteCard>) => {
      const id = action.payload.id;
      const filteredCard = state.cards.filter((card) => card.id !== id);
      state.cards = filteredCard;
    },
    setOpenGuestBookModal: (state, action: PayloadAction<boolean>) => {
      state.openGuestBookModal = action.payload;
    },
    setOpenGuestBookDelectModal: (state, action: PayloadAction<boolean>) => {
      state.openGuestBookDelectModal = action.payload;
    },
  },
});

export const { setCard, setId, deleteCard, setOpenGuestBookModal, setOpenGuestBookDelectModal } =
  guestBookSlice.actions;

export default guestBookSlice.reducer;
