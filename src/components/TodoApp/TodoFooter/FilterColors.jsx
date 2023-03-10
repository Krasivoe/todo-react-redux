import React from 'react';
import styles from './TodoFooter.module.scss';
import { Checkbox } from '@mui/material';
import { availableColors, getRusColor } from '../../../utils/colors.js';

const FilterColors = React.memo(({ colors, onColorChange }) => {
  const renderedColors = availableColors.map(color => {
    const checked = colors.includes(color);

    const handleChange = () => {
      const changeType = checked ? 'remove' : 'add';
      onColorChange(color, changeType);
    };

    return (
      <label className={styles.colorLabel} key={color}>
        <Checkbox sx={{ p: '5px' }} checked={checked} onChange={handleChange} />
        <span className={styles.colorText} style={{ color }}>
          {getRusColor(color)}
        </span>
      </label>
    );
  });

  return (
    <div>
      <h5 className={styles.titleFilter}>Сортировка по цвету</h5>
      <form>{renderedColors}</form>
    </div>
  );
});

export default FilterColors;
