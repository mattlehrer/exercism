export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n').map(r => r.split(' ').map(Number));
    let cols = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < this.matrix.length; j++) {
        col.push(this.matrix[j][i]);
      }
      cols.push(col);
    }
    this.cols = cols;
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.cols;
  }
}
