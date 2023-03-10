import { createSelector } from 'reselect';

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

export const TODO_ADD = 'TODOS/TODO_ADD';
export const TODO_REMOVE = 'TODOS/TODO_REMOVE';
export const TODO_CHANGE_COMPLETED = 'TODOS/TODO_CHANGE_COMPLETED';
export const TODO_CHANGE_COLOR = 'TODOS/TODO_CHANGE_COLOR';
export const TODOS_SET_COMPLETED = 'TODOS/TODOS_SET_COMPLETED';
export const TODOS_CLEAR_COMPLETED = 'TODOS/TODOS_CLEAR_COMPLETED';

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextTodoId(state.todos), text: action.payload, completed: false }
        ]
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case TODO_CHANGE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    case TODO_CHANGE_COLOR: {
      const { todoId, color } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo,
              color
            };
          }
          return todo;
        })
      };
    }
    case TODOS_SET_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: true }))
      };
    case TODOS_CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

export const actionAdd = todo => ({ type: TODO_ADD, payload: todo });
export const actionDelete = todoId => ({ type: TODO_REMOVE, payload: todoId });
export const actionChangeCompleted = todoId => ({ type: TODO_CHANGE_COMPLETED, payload: todoId });
export const actionChangeColor = (todoId, color) => ({
  type: TODO_CHANGE_COLOR,
  payload: { todoId, color }
});
export const actionSetCompleted = () => ({ type: TODOS_SET_COMPLETED });
export const actionClearCompleted = () => ({ type: TODOS_CLEAR_COMPLETED });

// Фильтрация
const selectTodos = state => state.todos.todos;

export const selectTodoById = (state, todoId) => {
  return selectTodos(state).find(todo => todo.id === todoId);
};

export const selectFilteredTodos = createSelector(
  // 1-ый Селектор ввода - все задачи
  selectTodos,
  // 2-ой Селектор ввода - фильтры
  state => state.filters,

  // Селектор вывода - получаем оба значения
  (todos, filters) => {
    const { status, colors } = filters;
    const statusAll = status === 'all';

    if (statusAll && colors.length === 0) return todos;

    const completedStatus = status === 'completed';

    return todos.filter(todo => {
      const finalStatus = statusAll || todo.completed === completedStatus;
      const colorMatches = colors.length === 0 || colors.includes(todo.color);

      // Фильтрация по статусу и цвету
      return finalStatus && colorMatches;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  // Передаем другой селектор
  selectFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id)
);
