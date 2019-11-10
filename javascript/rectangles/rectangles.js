export class Rectangles {
  static count(input) {
    if (!input || !input[0]) return 0;
    let total = 0;
    const rightEdge = input[0].length - 1;
    const bottomEdge = input.length - 1;
    const isHorizEdge = c => ['-', '+'].includes(c);
    const isVertEdge = c => ['|', '+'].includes(c);
    for (let y = 0; y <= bottomEdge; y++) {
      for (let x = 0; x <= rightEdge; x++) {
        if (input[y][x] === '+') {
          let w = x + 1;
          while (w <= rightEdge && isHorizEdge(input[y][w])) {
            if (input[y][w] === '+') {
              let h = y + 1;
              while (input[h] && isVertEdge(input[h][x]) && isVertEdge(input[h][w])) {
                if (input[h][w] === '+' && input[h].slice(x, w).match(/^[+-]*$/)) {
                  console.log(`adding ${x}/${y} w: ${w} h: ${h}`);
                  total++; 
                }
                h++;
              }
            }
            w++;
          }
        }
      }
    }
    return total;
  }
}
