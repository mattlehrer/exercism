export class ISBN {
  constructor(str) {
    this.isbn = str;
  }

  isValid() {
    let str = this.isbn.replace(/-/g,'');
    if (!str.match(/^\d{9}[\d|X]$/)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += str[i] * (10-i);
    }
    sum += str[9] === 'X' ? 10 : Number(str[9]);
    return !(sum % 11);
  }
}
