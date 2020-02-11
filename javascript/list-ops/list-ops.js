export class List {
  constructor(items = []) {
    this._values = [...items];
  }

  get values() {
    return [...this._values];
  }

  append(moreItems) {
    return new List([...this.values, ...moreItems.values]);
  }

  concat(moreLists) {
    const flatten = lists => {
      if (lists.values && !lists.values.length || !lists.values) return [];
      const [first, ...xs] = lists.values;
      return [...first.values, ...flatten(new List(xs))];
    }
    return new List([...this.values, ...flatten(moreLists)]);
    // return new List(moreLists.foldl((acc, l) => acc.append(l), this));
  }

  filter(cb) {
    const filterRecursion = (list, cb) => {
      if (!list.values.length) return new List();
      const [first, ...xs] = list.values;
      if (!xs.length) {
        return cb(first) ? new List([first]) : new List();
      } else {
        return cb(first) ? new List([first]).append(filterRecursion(new List(xs), cb)) : filterRecursion(new List(xs), cb);
      }
    }
    return filterRecursion(this, cb);
    // return this.foldl((acc, item) => (cb(item) && );
  }

  map(cb) {
    const mapRecursion = (list, cb) => {
      if (!list.values.length) return new List();
      const [first, ...xs] = list.values;
      return xs.length ? new List([cb(first), ...mapRecursion(new List(xs), cb).values]) : new List([cb(first)]);
    }
    return mapRecursion(this, cb);
  }

  length() {
    return this.values.length;
  }

  foldl(cb, initValue) {
    const reduce = (xs, acc, f, i = 0) => i == xs.length ? acc : reduce(xs, f(acc, xs[i]), f, i + 1);
    return reduce(this.values, initValue, cb, 0);
  }

  foldr(cb, initValue) {
    return this.reverse().foldl(cb, initValue);
  }

  reverse() {
    const revRecursion = (xs, i, j) => {
      if (i<j) {
        const temp = xs[i];
        xs[i] = xs[j];
        xs[j] = temp;
        revRecursion(xs, i+1, j-1);
      }
      return xs;
    }
    return new List(revRecursion(this.values, 0, this.length()-1));
  }
}
