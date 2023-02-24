import styles from './TodoApp.module.scss';
import { Paper } from '@mui/material';
import TodoHeader from './TodoHeader/TodoHeader.jsx';
import TodoList from './TodoList/TodoList.jsx';
import TodoFooter from './TodoFooter/TodoFooter.jsx';

const TodoApp = () => {
  return (
    <Paper className={styles.todoApp} elevation={3}>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </Paper>
  );
};

export default TodoApp;
