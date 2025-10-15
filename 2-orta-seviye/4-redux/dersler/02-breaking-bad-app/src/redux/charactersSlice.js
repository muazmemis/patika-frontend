import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// VITE_API_URL=https://rickandmortyapi.com/api
const API_URL = import.meta.env.VITE_API_URL;
// const API_URL = "https://rickandmortyapi.com/ap";

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (page) => {
  const response = await axios.get(`${API_URL}/character/?page=${page}`);
  return response.data;
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 40,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.loading = false;
      state.page += 1;
      state.error = null;

      if (action.payload.info.pages < state.page) state.hasNextPage = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default charactersSlice.reducer;
