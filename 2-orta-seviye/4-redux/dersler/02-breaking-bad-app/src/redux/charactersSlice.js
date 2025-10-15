import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// VITE_API_URL=https://rickandmortyapi.com/api
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "https://rickandmortyapi.com/ap";

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await axios.get(`${API_URL}/character`);
  return response.data.results;
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.items = [];
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export default charactersSlice.reducer;
