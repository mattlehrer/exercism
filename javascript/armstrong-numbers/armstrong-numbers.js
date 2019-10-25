export const validate = (num) => {
  const str = num.toString();
  const sum = str.split('').reduce((s, d) => parseInt(s, 10) + parseInt((d ** str.length), 10), 0);
  return (sum === num);
};
