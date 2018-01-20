

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.nodes, node);
  //debugger
  this.removeEdge(this.nodes[index]);
  if (index !== -1) {
    this.nodes.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.find(this.edges, function(edge) {
    return (edge[0] === fromNode || edge[0] === toNode) && (edge[1] === fromNode || edge[1] === toNode);
  }) !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  var index = _.reduce(this.edges, function(indexEdge, edge, i) {
    if (toNode === undefined && (edge[0] === fromNode || edge[1] === fromNode)) {
      return i;
    } else if ((edge[0] === fromNode || edge[0] === toNode) && 
      (edge[1] === fromNode || edge[1] === toNode)) {
      return i;
    }
    return indexEdge;
  }, -1);
  if (index !== -1) {
    this.edges.splice(index, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
  O(n) = nodes time complexity
  O(ne) = edges time complexity
  addNode: O(1)
  contains: O(n)
  removeNode: O(n + ne) 
  hasEdge: O(ne)
  addEdge: O(1)
  removeEdge: O(ne)
  
 */


