/*  Design an algorithm that computes the number of leaves in a binary tree. */

//node class
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

//create node helper function
function newNode(data) {
  return new Node(data);
}

let n; //number of leaves
//leaf count driver program
function countLeaves(node) {
  if (node == null) n = 0;
  if (node.left == null && node.right == null) n = 1;
  else n = countLeaves(node.left) + countLeaves(node.right);

  return n;
}

//create tree
let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);

console.log(countLeaves(root));
