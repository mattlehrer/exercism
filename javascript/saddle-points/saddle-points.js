export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n').map(r => r.trim().split(' ').map(Number));
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

  get saddlePoints() {
    let saddlePoints = [];
    for (let r = 0; r < this.rows.length; r++) {
      for (let c = 0; c < this.columns.length; c++) {
        if (this.matrix[r][c] === Math.max(...this.matrix[r]) && 
        this.matrix[r][c] === Math.min(...this.columns[c])) saddlePoints.push([r,c]);
      }
    }
    return saddlePoints;
  }
}
