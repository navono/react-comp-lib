// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
