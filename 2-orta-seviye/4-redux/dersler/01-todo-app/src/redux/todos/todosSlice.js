import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, title: 'Learn Redux', completed: false },
      { id: 2, title: 'Build a todo app', completed: true },
      { id: 3, title: 'Profit', completed: false },
    ],
    activeFilter: 'all',
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({title}) => {
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
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => {
  if (state.todos.activeFilter === 'all') return state.todos.items;
  if (state.todos.activeFilter === 'active') return state.todos.items.filter((item) => !item.completed);
  if (state.todos.activeFilter === 'completed') return state.todos.items.filter((item) => item.completed);
};

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
