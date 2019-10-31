export class Luhn {
  constructor(str) {
    this.digits = str.replace(/ /g, '');
  }

  get valid() {
    if (this.digits.match(/^\d\d+$/)) {
      const dubs = n => this.digits.length % 2 ? n % 2 : !(n % 2);
      const sum = [...this.digits]
        .map((d, i) => {
          if (dubs(i)) {
            return d * 2 > 9 ? d * 2 - 9 : d * 2;
          } else {
            return d;
          }
        })
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);
      return !(sum % 10);
    }
    return false;
  }
}
