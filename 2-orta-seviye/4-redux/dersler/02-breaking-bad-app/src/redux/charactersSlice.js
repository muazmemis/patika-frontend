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
    status: 'idle',
    error: null,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.status = 'succeeded';
      state.page += 1;
      state.error = null;

      if (action.payload.info.pages < state.page) state.hasNextPage = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export default charactersSlice.reducer;
