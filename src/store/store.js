import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice.js';
import filtersSlice from './filtersSlice.js';

const saveToLocaleStorage = state => {
  try {
    const data = JSON.stringify(state.todos.todos);
    localStorage.setItem('todos', data);
  } catch (e) {
    console.warn(e);
  }
};

const store = configureStore({
  reducer: {
    todos: todosSlice,
    filters: filtersSlice
  }
});

store.subscribe(() => saveToLocaleStorage(store.getState()));

export default store;
