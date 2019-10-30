export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    return (this.n * (this.n + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
