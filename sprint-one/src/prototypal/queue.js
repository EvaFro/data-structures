var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.store = {};
  someInstance.count = 0;
  someInstance.countInstance = 0;

  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.store[this.countInstance] = value;
  this.countInstance++;
  this.count++;
};

queueMethods.dequeue = function() {
  var dequeueValue = this.store[Object.keys(this.store)[0]];
  delete this.store[Object.keys(this.store)[0]];
  this.count--;
  return dequeueValue;
};

queueMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};