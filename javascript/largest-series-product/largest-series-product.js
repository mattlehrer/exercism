export const largestProduct = (str, len) => {
  if (len === 0) return 1;
  if (len > str.length) throw new Error('Slice size is too big.');
  if (!str.match(/^\d+$/) || len < 0) throw new Error('Invalid input.');
  let max = 0;
  for (let i = 0; i < str.length - len + 1; i++) {
    const prod = [...str].slice(i, i + len).reduce((a, b) => a * Number(b), 1);
    if (prod > max) max = prod;
  }
  return max;
};
