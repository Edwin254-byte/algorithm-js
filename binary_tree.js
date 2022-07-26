class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}
let root;
function getLevelUtil(node, data, level) {
  if (node == null) return 0;

  if (node.data == data) return level;

  let downlevel = getLevelUtil(node.left, data, level + 1);
  if (downlevel != 0) return downlevel;

  downlevel = getLevelUtil(node.right, data, level + 1);
  return downlevel;
}

/* Returns level of given data value */
function getLevel(node, data) {
  return getLevelUtil(node, data, 1);
}

/* Constructing tree given in the above figure */
root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);
for (let x = 1; x <= 5; x++) {
  let level = getLevel(root, x);
  if (level != 0) console.log("Level of " + x + " is " + getLevel(root, x));
  else console.log(x + " is not present in tree");
}
