export class BinarySearch {
  constructor(array) {
    const isSorted = a => {
      return a.every((el, i) => {
        return i>0 ? el>=a[i-1] : true;
      })
    }
    if (isSorted(array)) this._array = array;
  }

  get array() {
    return this._array ? [...this._array] : this._array;
  }

  indexOf(n) {
    const search = (n, a) => {
      if (!a || !a.length || a.length === 1 && a[0] !== n) return -1;
      if (n === a[Math.floor(a.length/2)]) return Math.floor(a.length/2);
      if (n < a[Math.floor(a.length/2)]) return search(n, a.slice(0,Math.floor(a.length/2)));
      const indexInSecondHalf = search(n, a.slice(Math.floor(a.length/2)));
      return indexInSecondHalf === -1 ? -1 : Math.floor(a.length/2) + indexInSecondHalf;
    }
    return search(n, this.array);
  }
}
