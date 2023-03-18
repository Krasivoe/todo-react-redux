import { createSlice } from '@reduxjs/toolkit';

const loadFromLocaleStorage = () => {
  try {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos === null) {
      return {
        todos: [
          { id: 0, text: 'Купить хлеба', completed: false },
          { id: 1, text: 'Выучить redux', completed: true, color: 'blue' },
          { id: 2, text: 'Посмотреть видео с котиками', completed: false, color: 'purple' }
        ]
      };
    }

    return { todos };
  } catch (e) {
    console.warn(e);
    return { todos: [] };
  }
};
const initialState = loadFromLocaleStorage();

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ id: nextTodoId(state.todos), text: action.payload, completed: false });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    changeTodoCompleted(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    changeTodoColor: {
      reducer(state, action) {
        const { todoId, color } = action.payload;
        const updatingTodo = state.todos.find(todo => todo.id === todoId);
        updatingTodo.color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color }
        };
      }
    },
    setTodosCompleted(state) {
      state.todos = state.todos.map(todo => ({ ...todo, completed: true }));
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  }
});

export default todosSlice.reducer;
export const {
  addTodo,
  removeTodo,
  changeTodoCompleted,
  changeTodoColor,
  setTodosCompleted,
  clearCompletedTodos
} = todosSlice.actions;
