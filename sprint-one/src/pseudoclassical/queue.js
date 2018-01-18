var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storeInstance = {};
  this.countInstance = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storeInstance[this.countInstance] = value;
  this.count++;
  this.countInstance++;
};

Queue.prototype.dequeue = function() {
  var dequeueValue = this.storeInstance[Object.keys(this.storeInstance)[0]];
  delete this.storeInstance[Object.keys(this.storeInstance)[0]];
  this.count--;
  return dequeueValue;
};

Queue.prototype.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};

var someInstacne = new Queue();