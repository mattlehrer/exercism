export class Triangle {
  constructor(rows) {
    this.last = rows;
    let triangle = [[1]];
    for (let i = 1; i < rows; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push((triangle[i-1][j-1] || 0) + (triangle[i-1][j] || 0));
      }
      triangle.push(row);
    }
    this.triangle = triangle;
  }

  get lastRow() {
    return this.triangle[this.last - 1];
  }

  get rows() {
    return this.triangle;
  }
}
