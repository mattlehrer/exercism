export class Series {
  constructor(str) {
    this.digitsArray = [...str].map(d => Number(d));
  }

  get digits() {
    return this.digitsArray;
  }

  slices(size) {
    let slices = [];
    if (size > this.digitsArray.length) throw new Error('Slice size is too big.');
    for (let i = 0; i <= this.digitsArray.length - size; i++) {
      slices.push(this.digitsArray.slice(i, i + size));
    }
    return slices;
  }
}
