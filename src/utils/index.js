export const capitalize = stroke => stroke[0].toUpperCase() + stroke.slice(1);

export const correctSuffix = (value, words) => {
  const remainder = Math.abs(value) % 100;
  const num = value % 10;

  if (remainder > 10 && remainder < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];

  return words[2];
};
