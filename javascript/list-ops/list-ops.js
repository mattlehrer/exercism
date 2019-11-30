export class List {
  constructor(items = []) {
    this.values = [...items];
  }

  append(moreItems) {
    return new List([...this.values, ...moreItems.values]);
  }

  concat(moreLists) {
    let lists = [...moreLists.values];
    let newList = [];
    while (lists.length) {
      const front = lists.shift();
      if (front.values !== null && typeof front.values[Symbol.iterator] === 'function') {
        newList.push(...front.values);
      }
    }
    return new List([...this.values, ...newList]);
  }

  filter(cb) {
    const newList = [];
    this.values.forEach(el => {
      if (cb(el)) newList.push(el);
    });
    return new List(newList);
  }

  map(cb) {
    const newList = [];
    this.values.forEach(el => {
      newList.push(cb(el));
    });
    return new List(newList);
  }

  length() {
    return this.values.length;
  }

  foldl(cb, initValue) {
    let acc = initValue;
    for (let i = 0; i < this.length(); i++) {
      acc = cb(acc, this.values[i]);
    }
    return acc;
  }

  foldr(cb, initValue) {
    let acc = initValue;
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = cb(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let newList = [];
    for (let i = this.length() - 1; i >= 0; i--) {
      newList.push(this.values[i]);
    }
    return new List(newList);
  }
}
