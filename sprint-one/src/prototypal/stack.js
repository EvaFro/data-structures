var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.store = {};
  someInstance.count = 0;
  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.store[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count--;
  var popValue = this.store[this.count];
  delete this.store[this.count];
  return popValue;

};

stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};
