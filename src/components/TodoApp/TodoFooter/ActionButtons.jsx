import styles from './TodoFooter.module.scss';
import { Button } from '@mui/material';

const ActionButtons = () => {
  return (
    <div>
      <h5 className={styles.title}>Действия</h5>
      <div className={styles.actionButtons}>
        <Button className={styles.btnAction} variant="contained">
          Завершить все задачи
        </Button>
        <Button className={styles.btnAction} variant="contained">
          Очистить выполненные
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
