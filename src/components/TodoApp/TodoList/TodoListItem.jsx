import styles from './TodoList.module.scss';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Checkbox, IconButton, MenuItem, Select } from '@mui/material';

const TodoListItem = () => {
  const selectColors = (
    <Select className={styles.select} value={''}>
      <MenuItem value="green">Зеленый</MenuItem>
      <MenuItem value="orange">Оранжевый</MenuItem>
      <MenuItem value="purple">Фиолетовый</MenuItem>
    </Select>
  );
  const deleteIcon = (
    <IconButton color="error">
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
        />
        <div className={styles.text}>Выучить редакс</div>
      </div>

      <div className={styles.buttons}>
        {document.documentElement.clientWidth > 500 ? (
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
};

export default TodoListItem;
