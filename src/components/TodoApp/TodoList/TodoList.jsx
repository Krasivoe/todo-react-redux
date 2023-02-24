import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem.jsx';

const TodoList = () => {
  return (
    <ul className={styles.list}>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
