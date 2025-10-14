import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'Learn Redux', completed: false },
      { id: 2, text: 'Build a todo app', completed: true },
      { id: 3, text: 'Profit', completed: false },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.completed = !item.completed;
    },
  },
});

export const { addTodo, toggle } = todosSlice.actions;

export default todosSlice.reducer;
