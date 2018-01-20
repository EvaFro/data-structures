

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  this.remove(k);
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = _.find(this._storage.get(index), function(tuple) {
    return tuple[0] === k;
  });

  if (tuple !== undefined) {
    return tuple[1];
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removeIndex = _.reduce(this._storage.get(index), function(removeIndex, tuple, i) {
    if (tuple[0] === k) {
      return i;
    }
    return removeIndex;
  }, -1);

  if (removeIndex !== -1) {
    this._storage.get(index).splice(removeIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  instert: Number of elments in buket is small so essentually an O(1);
  retrieve: Number of elments in buket is small so essentually an O(1);
  remove: Number of elments in buket is small so essentually an O(1);
 */


