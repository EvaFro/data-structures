var BinarySearchTree = function(value) {
  var treeInstance = Object.create(binarySearchTreeMethods);
  treeInstance.value = value;
  treeInstance.left = null;
  treeInstance.right = null;
  return treeInstance;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function insert(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value); 
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function contains(value) {
  if (value === this.value) {
    return true;
  } else {
    if (this.value > value) {
      if (this.left !== null) {
        return this.left.contains(value);
      } 
    } else {
      if (this.right !== null) {
        return this.right.contains(value);
      } 
    }
  }

  return false;
};

binarySearchTreeMethods.depthFirstLog = function depthFirstLog(cb) {
  cb(this.value);
  if (this.left !== null) { 
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
Insert: O(log(n)) complexity
Contains: O(log(n)) complexity
depthFirstLog: O(n) complexity
 */
