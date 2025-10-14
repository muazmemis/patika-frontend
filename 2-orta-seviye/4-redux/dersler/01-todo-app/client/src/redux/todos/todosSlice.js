import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: 'all',
    loading: false,
    error: null,
    addNewTodoLoading: false,
    addNewTodoError: null,
  },
  reducers: {
    toggle: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.completed = !item.completed;
    },
    destroy: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.addNewTodoLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addNewTodoLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addNewTodoLoading = false;
        state.addNewTodoError = action.error.message;
      });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => {
  if (state.todos.activeFilter === 'all') return state.todos.items;
  if (state.todos.activeFilter === 'active') return state.todos.items.filter((item) => !item.completed);
  if (state.todos.activeFilter === 'completed') return state.todos.items.filter((item) => item.completed);
};

export const { toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
