var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      var returnValue = children[i].contains(target);
      if (returnValue) {
        return true;
      }
      
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  var index = -1;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i].value === this.value) {
      index = i;
      break;
    }
  }
  parent.children.splice(index, 1);

  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this.value);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1) complexity
  contains: O(n) complexity
 */
