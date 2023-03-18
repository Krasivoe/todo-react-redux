import styles from './TodoFooter.module.scss';
import ActionButtons from './ActionButtons.jsx';
import FilterStatus from './FilterStatus.jsx';
import FilterColors from './FilterColors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTodos, setTodosCompleted } from '../../../store/todosSlice.js';
import { changeColor, changeStatus } from '../../../store/filtersSlice.js';
import { correctSuffix } from '../../../utils/index.js';
import { useCallback } from 'react';

const TodoFooter = () => {
  const todosRemaining = useSelector(state => {
    const unCompletedTodos = state.todos.todos.filter(todo => !todo.completed);
    return unCompletedTodos.length;
  });

  const { status, colors } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const onSetCompletedClick = useCallback(() => dispatch(setTodosCompleted()), [dispatch]);

  const onClearCompletedClick = useCallback(() => dispatch(clearCompletedTodos()), [dispatch]);

  const onStatusChange = useCallback(
    event => dispatch(changeStatus(event.target.value)),
    [dispatch]
  );

  const onColorChange = useCallback(
    (color, changeType) => {
      dispatch(changeColor(color, changeType));
    },
    [dispatch]
  );

  return (
    <footer className={styles.footer}>
      <ActionButtons onSetAll={onSetCompletedClick} onClearAll={onClearCompletedClick} />
      <div>
        <h5 className={styles.title}>Оставшиеся задачи</h5>
        <span>
          Осталось <strong>{todosRemaining}</strong>{' '}
          {correctSuffix(todosRemaining, ['задача', 'задачи', 'задач'])}
        </span>
      </div>
      <FilterStatus status={status} onStatusChange={onStatusChange} />
      <FilterColors colors={colors} onColorChange={onColorChange} />
    </footer>
  );
};

export default TodoFooter;
