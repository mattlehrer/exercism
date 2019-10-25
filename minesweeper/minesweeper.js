function annotate(b) {
  const board = b.map(r => r.split(''));
  const temp = b.map(r => r.split(''));
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '*') {
        for (let i = Math.max(r - 1, 0); i <= Math.min(r + 1, board.length - 1); i++) {
          for (let j = Math.max(c - 1, 0); j <= Math.min(c + 1, board[r].length - 1); j++) {
            if (temp[i][j] === '*') {
              // do nothing
            } else if (temp[i][j] === ' ') {
              temp[i][j] = '1';
            } else {
              temp[i][j] = (parseInt(temp[i][j], 10) + 1).toString();
            }
          }
        }
      }
    }
  }
  const output = [];
  for (let x = 0; x < board.length; x++) {
    output[x] = temp[x].reduce((s, t) => s + t, '');
  }
  return output;
}

export { annotate };
