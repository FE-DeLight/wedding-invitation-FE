import { configureStore } from '@reduxjs/toolkit';
import templateSlice from './templateSlice';
import userInfoSlice from './userInfoSlice';
import loginSlice from './loginSlice';
import styleOptionSlice from './styleOptionSlice';

const store = configureStore({
  reducer: {
    template: templateSlice.reducer,
    user: userInfoSlice,
    login: loginSlice,
    styleOption: styleOptionSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
