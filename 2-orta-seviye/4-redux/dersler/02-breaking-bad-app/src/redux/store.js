import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './charactersSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});
