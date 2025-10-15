import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchLocations = createAsyncThunk('location/fetchLocations', async () => {
  const response = await axios.get(`${API_URL}/location`);
  return response.data;
});

export const getById = createAsyncThunk('location/getById', async (id) => {
  const response = await axios.get(`${API_URL}/location/${id}`);
  return response.data;
});

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    items: [],
    selectedItem: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.status = 'succeeded';
    });
    builder.addCase(fetchLocations.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const locationSelector = (state) => state.location.items;
export const locationStatusSelector = (state) => state.location.status;
export const locationErrorSelector = (state) => state.location.error;
export default locationSlice.reducer;
