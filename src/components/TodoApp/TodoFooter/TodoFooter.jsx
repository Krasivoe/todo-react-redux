import styles from './TodoFooter.module.scss';
import ActionButtons from './ActionButtons.jsx';
import FilterStatus from './FilterStatus.jsx';
import FilterColors from './FilterColors.jsx';

const TodoFooter = () => {
  return (
    <footer className={styles.footer}>
      <ActionButtons />
      <div>
        <h5 className={styles.title}>Оставшиеся задачи</h5>
        <span>
          Осталось <strong>5</strong> задач
        </span>
      </div>
      <FilterStatus />
      <FilterColors />
    </footer>
  );
};

export default TodoFooter;
