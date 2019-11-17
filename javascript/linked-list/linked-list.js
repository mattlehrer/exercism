class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
  }

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.last = this.head;
    } else {
      this.last.next = new Node(val, this.last);
      this.last = this.last.next;
    }
  }

  pop() {
    const temp = this.last;
    this.last = this.last.prev;
    if (temp === this.head) this.head = null;
    return temp.value;
  }

  shift() {
    const temp = this.head;
    this.head = this.head && this.head.next ? this.head.next : null;
    return temp.value;
  }

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.last = this.head;
    } else {
      this.head.prev = new Node(val, null, this.head);
      this.head = this.head.prev;
    }
  }

  delete(val) {
    let node = this.head;
    while (node && node.value !== val) {
      node = node.next;
    }
    if (node && node.value === val) {
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      } else {
        this.last = node.prev;
      }
    }
  }

  count() {
    let c = 0;
    let node = this.head;
    if (node) c++;
    while (node && node.next) {
      c++;
      node = node.next;
    }
    return c;
  }
}
