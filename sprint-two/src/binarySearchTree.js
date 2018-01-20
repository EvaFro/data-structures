var BinarySearchTree = function(value) {
  var treeInstance = Object.create(binarySearchTreeMethods);
  treeInstance.value = value;
  treeInstance.left = null;
  treeInstance.right = null;
  return treeInstance;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function insert(value) {
  var newBinaryTree = BinarySearchTree(value);
  var placeNewBinaryTree = function (binaryTree) { 
    if (binaryTree.value > value) {
      if (binaryTree.left === null) {
        binaryTree.left = newBinaryTree;
        return;
      } else {
        placeNewBinaryTree(binaryTree.left);
      } 
    } else {
      if (binaryTree.right === null) {
        binaryTree.right = newBinaryTree;
        return;
      } else {
        placeNewBinaryTree(binaryTree.right);
      }
    }
  };
  placeNewBinaryTree(this);
};

binarySearchTreeMethods.contains = function contains(value) {
  if (value === this.value) {
    return true;
  } else {
    if (this.value > value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(value);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(value);
    }
  }

  return false;
};

binarySearchTreeMethods.depthFirstLog = function depthFirstLog(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
