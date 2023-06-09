import React from 'react';
import styles from './TodoList.module.scss';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Checkbox, IconButton, MenuItem, Select } from '@mui/material';
import { availableColors, getRusColor } from '../../../utils/colors.js';
import { capitalize } from '../../../utils/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../../../hooks/useWindowSize.js';
import { selectTodoById } from '../../../store/selectors.js';
import { changeTodoColor, changeTodoCompleted, removeTodo } from '../../../store/todosSlice.js';

const TodoListItem = React.memo(({ todoId }) => {
  const todo = useSelector(state => selectTodoById(state, todoId));
  const { text, completed, color } = todo;
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  const handleCompletedChanged = () => {
    dispatch(changeTodoCompleted(todo.id));
  };

  const handleColorChanged = e => {
    const color = e.target.value;
    dispatch(changeTodoColor(todo.id, color));
  };

  const handleDeleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const selectColors = (
    <Select
      className={styles.select}
      sx={{ color, fontWeight: 'bold' }}
      value={color ? color : ''}
      onChange={handleColorChanged}
    >
      <MenuItem value="" sx={{ height: '25px' }} />
      {availableColors.map(color => (
        <MenuItem key={color} value={color} sx={{ color, fontWeight: 'bold' }}>
          {capitalize(getRusColor(color))}
        </MenuItem>
      ))}
    </Select>
  );

  const deleteIcon = (
    <IconButton color="error" onClick={handleDeleteTodo}>
      <DeleteForeverOutlinedIcon fontSize="large" />
    </IconButton>
  );

  return (
    <li className={styles.listItem}>
      <div className={styles.label}>
        <Checkbox
          className={styles.checkbox}
          icon={<BookmarkBorderRoundedIcon color="primary" />}
          checkedIcon={<BookmarkRoundedIcon />}
          size="large"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <div className={completed ? [styles.text, styles.completed].join(' ') : styles.text}>
          {text}
        </div>
      </div>

      <div className={styles.buttons}>
        {/*windowSize.width === 0 для того, чтобы при скрытии элемента перестановка не выполнялась*/}
        {windowSize.width > 500 || windowSize.width === 0 ? (
          <>
            {selectColors}
            {deleteIcon}
          </>
        ) : (
          <>
            {deleteIcon}
            {selectColors}
          </>
        )}
      </div>
    </li>
  );
});

export default TodoListItem;
