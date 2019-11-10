const next = (x, y, n) => {

}

export class SpiralMatrix {
  static ofSize(n) {
    let spiral = [];
    for (let i = 0; i < n; i++) spiral.push([]);
    let x = 0;
    let y = 0;
    let direction = 'right';
    for (let i = 1; i <= n ** 2; i++) {
      spiral[y][x] = i;
      if (direction === 'right') {
        if ((x + 1 < n) && !spiral[y][x+1]) {
          x++;
        } else {
          direction = 'down';
          y++;
        }
      } else if (direction === 'down') {
        if ((y + 1 < n) && !spiral[y+1][x]) {
          y++;
        } else {
          direction = 'left';
          x--;
        }
      } else if (direction === 'left') {
        if ((x - 1 >= 0) && !spiral[y][x-1]) {
          x--;
        } else {
          direction = 'up';
          y--;
        }
      } else {
        if ((y - 1 >= 0) && !spiral[y-1][x]) {
          y--;
        } else {
          direction = 'right';
          x++;
        }
      }
    }
    return spiral;
  }
}
