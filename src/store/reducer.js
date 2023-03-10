import { combineReducers } from 'redux';
import todosReducer from './todosReducer.js';
import filtersReducer from './filtersReducer.js';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
