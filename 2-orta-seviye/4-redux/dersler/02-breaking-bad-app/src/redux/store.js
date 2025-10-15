import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './charactersSlice';
import locationReducer from './locationSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    location: locationReducer,
  },
});
