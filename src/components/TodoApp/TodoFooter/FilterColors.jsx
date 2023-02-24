import styles from './TodoFooter.module.scss';
import { Checkbox } from '@mui/material';

const FilterColors = () => {
  return (
    <div>
      <h5 className={styles.titleFilter}>Сортировка по цвету</h5>
      <form>
        <label className={styles.colorLabel}>
          <Checkbox sx={{ p: '5px' }} />
          <span className={styles.colorText} style={{ color: 'green' }}>
            Зеленый
          </span>
        </label>
        <label className={styles.colorLabel}>
          <Checkbox sx={{ p: '5px' }} />
          <span className={styles.colorText} style={{ color: 'green' }}>
            Зеленый
          </span>
        </label>
        <label className={styles.colorLabel}>
          <Checkbox sx={{ p: '5px' }} />
          <span className={styles.colorText} style={{ color: 'green' }}>
            Зеленый
          </span>
        </label>
        <label className={styles.colorLabel}>
          <Checkbox sx={{ p: '5px' }} />
          <span className={styles.colorText} style={{ color: 'green' }}>
            Зеленый
          </span>
        </label>
        <label className={styles.colorLabel}>
          <Checkbox sx={{ p: '5px' }} />
          <span className={styles.colorText} style={{ color: 'green' }}>
            Фиолетовый
          </span>
        </label>
      </form>
    </div>
  );
};

export default FilterColors;
