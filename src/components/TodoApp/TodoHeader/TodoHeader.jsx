import styles from './TodoHeader.module.scss';
import { Input } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionAdd } from '../../../store/todosReducer.js';

const TodoHeader = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    const trimmedText = text.trim();

    if (e.key === 'Enter' && trimmedText) {
      dispatch(actionAdd(text));
      setText('');
    }
  };

  return (
    <header>
      <Input
        className={styles.input}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        fullWidth
        disableUnderline={true}
        placeholder="Что нужно сделать?"
      />
    </header>
  );
};

export default TodoHeader;
