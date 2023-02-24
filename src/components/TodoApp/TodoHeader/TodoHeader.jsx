import styles from './TodoHeader.module.scss';
import { Input } from '@mui/material';
import { useState } from 'react';

const TodoHeader = () => {
  const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <Input
        className={styles.input}
        value={todoValue}
        onChange={e => setTodoValue(e.target.value)}
        fullWidth
        disableUnderline={true}
        placeholder="Что нужно сделать?"
      />
    </header>
  );
};

export default TodoHeader;
