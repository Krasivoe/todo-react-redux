import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredTodoIds } from '../../../store/todosReducer.js';

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <ul className={styles.list}>
      {todoIds.length > 0 ? (
        todoIds.map(todoId => <TodoListItem key={todoId} todoId={todoId} />)
      ) : (
        <li className={[styles.listItem, styles.listItemEmpty].join(' ')}>Список пуст...</li>
      )}
    </ul>
  );
};

export default TodoList;
