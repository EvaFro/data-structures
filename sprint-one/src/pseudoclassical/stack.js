var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storeIntances = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storeIntances[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  this.count--;
  var popValue = this.storeIntances[this.count];
  delete this.storeIntances[this.count];
  return popValue;
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};

var someInstance = new Stack();