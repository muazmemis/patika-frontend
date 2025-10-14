import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await axios.get(`${API_URL}/character`);
  return response.data.results;
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default charactersSlice.reducer;
