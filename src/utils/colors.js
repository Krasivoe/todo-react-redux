export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

export const getRusColor = color => {
  switch (color) {
    case 'green':
      return 'Зеленый';
    case 'blue':
      return 'Синий';
    case 'orange':
      return 'Оранжевый';
    case 'purple':
      return 'Фиолетовый';
    case 'red':
      return 'Красный';
    default:
      return '';
  }
};
