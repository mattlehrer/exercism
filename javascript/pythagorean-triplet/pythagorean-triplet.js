export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  static where(opts) {
    let triplets = [];
    for(let a = opts.minFactor || 3; a <= opts.maxFactor; a++) {
      for (let b = Math.max(opts.minFactor || 4, a + 1); b <= opts.maxFactor; b++) {
        for (let c = Math.max(opts.minFactor || 5, b + 1); c <= opts.maxFactor; c++) {
          if (a ** 2 + b ** 2 === c ** 2) triplets.push(new Triplet(a, b, c));
        }
      }
    }
    return opts.sum ? triplets.filter(triplet => triplet.sum() === opts.sum) : triplets;
  }
}
