import React from 'react';
import styles from './TodoFooter.module.scss';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { statusFilters } from '../../../utils/filters.js';

const FilterStatus = React.memo(({ onStatusChange, status }) => {
  const renderedFilters = Object.keys(statusFilters).map(key => (
    <FormControlLabel
      key={key}
      sx={{ m: '0' }}
      label={<Typography fontSize="15px">{statusFilters[key]}</Typography>}
      control={<Radio sx={{ p: '5px' }} />}
      value={key}
      checked={key === status}
      onChange={onStatusChange}
    />
  ));

  return (
    <div>
      <h5 className={styles.titleFilter}>Сортировка по статусу</h5>
      <RadioGroup name="status-group">{renderedFilters}</RadioGroup>
    </div>
  );
});

export default FilterStatus;
