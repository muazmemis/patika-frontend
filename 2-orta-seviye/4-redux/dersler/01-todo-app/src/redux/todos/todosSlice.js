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
  reducers: {},
});

// export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure, addTodo, toggleTodo, deleteTodo } =
//   todosSlice.actions;

export default todosSlice.reducer;
