import React from 'react';
import styles from './TodoFooter.module.scss';
import { Button } from '@mui/material';

const ActionButtons = React.memo(({ onSetAll, onClearAll }) => {
  return (
    <div>
      <h5 className={styles.title}>Действия</h5>
      <div className={styles.actionButtons}>
        <Button className={styles.btnAction} variant="contained" onClick={onSetAll}>
          Завершить все задачи
        </Button>
        <Button className={styles.btnAction} variant="contained" onClick={onClearAll}>
          Очистить выполненные
        </Button>
      </div>
    </div>
  );
});

export default ActionButtons;
