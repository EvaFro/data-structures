var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstence = {};
  someInstence.store = {};
  someInstence.count = 0;
  someInstence.countInstance = 0;
  _.extend(someInstence, queueMethods);
  return someInstence;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
};

queueMethods.dequeue = function() {
  this.count--;
};

queueMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};


