export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  add(otherComplexNumber) {
    return new ComplexNumber(otherComplexNumber.real + this.real, otherComplexNumber.imag + this.imag);
  }

  sub(otherComplexNumber) {
    return new ComplexNumber(this.real - otherComplexNumber.real, this.imag - otherComplexNumber.imag);
  }

  div(otherComplexNumber) {
    const a = this.real;
    const b = this.imag;
    const c = otherComplexNumber.real;
    const d = otherComplexNumber.imag;
    return new ComplexNumber((a * c + b * d) / (c ** 2 + d ** 2), (b * c - a * d) / (c ** 2 + d ** 2));
  }

  mul(otherComplexNumber) {
    const a = this.real;
    const b = this.imag;
    const c = otherComplexNumber.real;
    const d = otherComplexNumber.imag;
    return new ComplexNumber(a * c - b * d, a * d + b * c);
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag ? -this.imag : 0);
  }

  get exp() {
    return new ComplexNumber(Math.E ** this.real * Math.cos(this.imag), Math.E ** this.real * Math.sin(this.imag));
  }
}
