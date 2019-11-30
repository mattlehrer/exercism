export class BinarySearchTree {
  constructor(d) {
    this.d = d;
    this.l = undefined;
    this.r = undefined;
  }

  get data() {
    return this.d;
  }

  get right() {
    return this.r;
  }

  get left() {
    return this.l;
  }

  insert(n) {
    if (n <= this.d) {
      if (!this.l) {
        this.l = new BinarySearchTree(n);
      } else {
        this.l.insert(n)
      }
    } else {
      if (!this.r) {
        this.r = new BinarySearchTree(n);
      } else {
        this.r.insert(n)
      }
    } 
  }

  each(cb) {
    let data = [];
    const getAllData = node => {
      if (node.l && node.l.d) data.push(getAllData(node.l));
      if (node.d) data.push(node.d);
      if (node.r && node.r.d) data.push(getAllData(node.r));
    };
    getAllData(this);
    data = data.filter(el => el !== undefined);
    data.forEach(cb);
  }
}
