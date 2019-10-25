export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind () {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw 'zero/negative side';
    }

    if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
      throw 'violates inequality'
    }

    if (this.side1 === this.side2 && this.side1 === this.side3) {
      return 'equilateral'
    } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return 'isosceles'
    } else {
      return 'scalene'
    }
  }

}
