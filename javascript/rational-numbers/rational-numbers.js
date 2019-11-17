const factors = n => {
  let factors = new Set();
  factors.add(1);
  factors.add(n);
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (!(n % i)) {
      factors.add(i);
      factors.add(n/i);
    }
    i ++;
  }
  return [...factors];
}

const findGCD = (a, b) => {
  const factorsOfA = factors(a);
  const factorsOfB = factors(b);
  return factorsOfA.reduce((acc, curr) => {
    if (curr > acc && factorsOfB.includes(curr)) return curr;
    return acc;
  }, 1);
}

export class Rational {
  constructor(a, b) {
    // store a and b reduced by greatest common divisor
    if ((a<0 && b <0) || (a>0 && b<0)) {
      a = -a;
      b = -b;
    }
    const gcd = findGCD(Math.abs(a), Math.abs(b));
    
    this.a = a / gcd;
    this.b = this.a ? b / gcd : 1;
  }

  add(n) {
    return new Rational((this.a * n.b) + (this.b * n.a), this.b * n.b);
  }

  sub(n) {
    return new Rational((this.a * n.b) - (this.b * n.a), this.b * n.b);
  }

  mul(n) {
    return new Rational(this.a * n.a, this.b * n.b);
  }

  div(n) {
    return new Rational(this.a * n.b, this.b * n.a);
  }

  abs() {
    return new Rational(this.a >= 0 ? this.a : -1 * this.a, this.b >= 0 ? this.b : -1 * this.b);
  }

  exprational(exp) {
    if (exp >= 0) {
      return new Rational(this.a ** exp, this.b ** exp);
    } else {
      exp = Math.abs(exp);
      return new Rational(this.b ** exp, this.a ** exp);
    }
  }

  expreal(base) {
    // return (base ** (this.a/this.b));
    return Number(Math.pow(base, this.a/this.b).toPrecision(3));
  }

  reduce() {
    return new Rational(this.a, this.b);
  }
}
