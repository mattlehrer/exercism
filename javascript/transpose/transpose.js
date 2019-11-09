export const transpose = rows => {
  if (!rows.length) return [];
  // find max length row which becomes the number of output rows
  const maxRow = rows.reduce((max, curr, j) => rows[max].length > curr.length ? max : j, 0);
  const numberOfNewRows = rows[maxRow].length;
  let cols = [];
  for (let i = 0; i < numberOfNewRows; i++) {
    let col = rows.reduce((acc, curr) => {
      return `${acc}${curr[i] || ' '}`;
    }, '');
    if (i === numberOfNewRows - 1) col = col.trimEnd();
    cols.push(col);
  }
  return cols;
};
