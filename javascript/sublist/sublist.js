export class List {
  constructor(list) {
    this.list = list || null;
  }

  compare(other) {
    const areEqual = (a, b) => {
      if (a === b) return true;
      if (!a || !b) return false;
      if (a.length != b.length) return false;
    
      for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    const isSublist = (a, b) => {
      if (!a) return true;
      if (!b) return false;
      for (let i = 0; i <= b.length - a.length; i++) {
        if (areEqual(a, b.slice(i, i + a.length))) return true;
      }
      return false;
    }

    const isSuperlist = (a, b) => {
      return isSublist(b, a);
    }

    if (areEqual(this.list, other.list)) return 'EQUAL';
    if (isSublist(this.list, other.list)) return 'SUBLIST';
    if (isSuperlist(this.list, other.list)) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}
