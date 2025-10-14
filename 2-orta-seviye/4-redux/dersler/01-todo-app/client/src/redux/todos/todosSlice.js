import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addTodoAsync, deleteTodoAsync, getTodosAsync, toggleTodoAsync } from './services';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    activeFilter: localStorage.getItem('activeFilter') || 'all',
    loading: false,
    error: null,
    addNewTodo: {
      loading: false,
      error: null,
    },
  },
  reducers: {
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
        state.addNewTodo.loading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addNewTodo.loading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addNewTodo.loading = false;
        state.addNewTodo.error = action.error.message;
      });
    builder.addCase(toggleTodoAsync.fulfilled, (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[index] = action.payload;
    });
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilterValue = (state) => state.todos.activeFilter;

export const selectActiveFilter = createSelector([selectTodos, selectActiveFilterValue], (items, activeFilter) => {
  if (activeFilter === 'all') return items;
  if (activeFilter === 'active') return items.filter((item) => !item.completed);
  if (activeFilter === 'completed') return items.filter((item) => item.completed);
});

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
