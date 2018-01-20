
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  
  
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else if (list.head.next === null) {
      list.head.next = node;
    } else {
      list.tail.next = node;
    }
    
    list.tail = node;
  };

  list.removeHead = function() {
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1) complexity
  removeHead: O(1) complexity 
  contains: O(n) complexity
 */
