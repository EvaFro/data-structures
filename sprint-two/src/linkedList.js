
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  
  
  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next = value; 
      if (!list.head.next) {
        list.head.next = value;
        list.count++;
      } else {
        list[list.count] = list.tail;
        list.count++;
      }
    } else {
      list.head = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    var oldHeadValue = list.head.value;
    var newHead = list.head.next;
    delete list.head;
    list.head = _.find(list, function(element) {
      return element.value === newHead;
    });
    return oldHeadValue;
  };

  list.contains = function(target) {
    return undefined !== _.find(list, function(element) {
      return element.value === target;
    });
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
 */
