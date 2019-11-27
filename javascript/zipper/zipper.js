export class Zipper {
  constructor(tree, focus = null, parent = null) {
    this.tree = tree;
    this.focus = focus || tree;
    this.parent = parent;
  }
  
  // from_tree (get a zipper out of a rose tree, the focus is on the root node)
  static fromTree(tree) {
    // console.log(tree);
    return new Zipper(tree);
  }

  // to_tree (get the rose tree out of the zipper)
  toTree() {
    return this.tree;
  }

  left() {
    return this.tree.left ? new Zipper(this.tree.left, ) : null
  }

  right() {
    return this.tree.right ? new Zipper(this.tree.right) : null
  }

  // value (get the value of the focus node)
  value() {
    return this.focus.value;
  }

  // up (move the focus to the parent, returns a new zipper)
  up() {}

  // set_value (set the value of the focus node, returns a new zipper)
  setValue() {}

  setLeft() {}

  setRight() {}

  // insert_before (insert a new subtree before the focus node, it becomes the prev of the focus node, returns a new zipper)
  insertBefore() {}

  // insert_after (insert a new subtree after the focus node, it becomes the next of the focus node, returns a new zipper)
  insertAfter() {}

  // delete (removes the focus node and all subtrees, focus moves to the next node if possible otherwise to the prev node if possible, otherwise to the parent node, returns a new zipper)
  delete() {}
}
