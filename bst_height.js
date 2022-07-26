// JavaScript program to find the number of levels of bst tree

// A binary tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//create node helper function
function newNode(data) {
  return new Node(data);
}

/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
// function maxDepth(node) {
//   if (node == null) return 0;
//   else {
//     /* compute the depth of each subtree */
//     let leftDepth = maxDepth(node.left);
//     let rightDepth = maxDepth(node.right);

//     /* use the larger one */
//     return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
//   }
// }
let n;
function maxDepth(node) {
  if (node == null) n = 0;
  else {
    /* compute the depth of each subtree */
    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);

    /* use the larger one */
    n = leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
  }

  return n;
}

/* Driver program to test above functions */

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.left.right.right = newNode(6);

console.log("Number of levels of the tree : " + maxDepth(root));
