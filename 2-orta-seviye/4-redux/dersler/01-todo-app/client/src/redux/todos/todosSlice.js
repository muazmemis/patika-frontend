import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_URL = 'http://localhost:7000/todos';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
  const res = await axios(API_URL);
  if (res.status === 200) {
    return { todos: res.data };
  }
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: 'all',
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
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
        state.items = action.payload.todos;
        state.loading = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => {
  if (state.todos.activeFilter === 'all') return state.todos.items;
  if (state.todos.activeFilter === 'active') return state.todos.items.filter((item) => !item.completed);
  if (state.todos.activeFilter === 'completed') return state.todos.items.filter((item) => item.completed);
};

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
