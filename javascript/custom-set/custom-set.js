export class CustomSet {
  constructor(elements = []) {
    this.set = elements;
  }

  empty() {
    return this.set.length === 0;
  }

  contains(x) {
    for (let i=0; i<this.set.length; i++) {
      if (this.set.includes(x)) return true;
    }
    return false;
  }

  add(x) {
    if (!this.contains(x)) this.set.push(x);
    return new CustomSet(this.set);
  }

  subset(otherSet) {
    if (this.empty()) return true;
    for (let i=0; i<this.set.length; i++) {
      if (!otherSet.contains(this.set[i])) return false;
    }
    return true;
  }

  disjoint(otherSet) {
    if (this.empty()) return true;
    for (let i=0; i<this.set.length; i++) {
      if (otherSet.contains(this.set[i])) return false;
    }
    return true;
  }

  eql(otherSet) {
    if (this.empty() && otherSet.empty()) return true;
    if (!this.empty() && otherSet.empty()) return false;
    if (this.empty() && !otherSet.empty()) return false;
    for (let i=0; i<this.set.length; i++) {
      if (!otherSet.contains(this.set[i])) return false;
    }
    for (let i=0; i<otherSet.set.length; i++) {
      if (!this.contains(otherSet.set[i])) return false;
    }
    return true;
  }

  union(otherSet) {
    const newSet = new CustomSet(this.set);
    for (let i=0; i<otherSet.set.length; i++) {
      newSet.add(otherSet.set[i]);
    }
    return newSet;
  }

  intersection(otherSet) {
    if (this.empty() || otherSet.empty()) return new CustomSet();
    const newSet = [];
    for (let i=0; i<this.set.length; i++) {
      if (otherSet.contains(this.set[i])) newSet.push(this.set[i]);
    }
    return new CustomSet(newSet);
  }

  difference(otherSet) {
    if (this.empty()) return new CustomSet();
    if (otherSet.empty()) return this;
    const newSet = [];
    for (let i=0; i<this.set.length; i++) {
      if (!otherSet.contains(this.set[i])) newSet.push(this.set[i]);
    }
    return new CustomSet(newSet);
  }
}
