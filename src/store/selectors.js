import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.todos;

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
