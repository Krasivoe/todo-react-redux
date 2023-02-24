import styles from './TodoFooter.module.scss';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

const FilterStatus = () => {
  return (
    <div>
      <h5 className={styles.titleFilter}>Сортировка по статусу</h5>
      <RadioGroup name="status-group" defaultValue="all">
        <FormControlLabel
          sx={{ m: '0' }}
          value="all"
          label={<Typography fontSize="15px">Все</Typography>}
          control={<Radio sx={{ p: '5px' }} />}
        />
        <FormControlLabel
          sx={{ m: '0' }}
          value="active"
          label={<Typography fontSize="15px">Активные</Typography>}
          control={<Radio sx={{ p: '5px' }} />}
        />
        <FormControlLabel
          sx={{ m: '0' }}
          value="completed"
          label={<Typography fontSize="15px">Выполненные</Typography>}
          control={<Radio sx={{ p: '5px' }} />}
        />
      </RadioGroup>
    </div>
  );
};

export default FilterStatus;
