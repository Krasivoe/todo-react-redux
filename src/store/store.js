import { createStore } from 'redux';
import rootReducer from './reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const saveToLocaleStorage = state => {
  try {
    const data = JSON.stringify(state.todos.todos);
    localStorage.setItem('todos', data);
  } catch (e) {
    console.warn(e);
  }
};

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => saveToLocaleStorage(store.getState()));

export default store;
