import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7000/todos';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
  const res = await axios(API_URL);
  if (res.status === 200) {
    return res.data;
  }
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (data) => {
  const res = await axios.post(API_URL, data);

  if (res.status === 200) {
    return res.data;
  }
});

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodoAsync', async ({ id, data }) => {
  const res = await axios.patch(`${API_URL}/${id}`, data);

  if (res.status === 200) {
    return res.data;
  }
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);

  if (res.status === 200) {
    return res.data;
  }
});
