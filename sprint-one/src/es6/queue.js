class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storeInstance = {};
    this.countInstance = 0;
    this.count = 0;
  }
  
  enqueue(value) {
    this.storeInstance[this.countInstance] = value;
    this.countInstance++;
    this.count++;
  }

  dequeue() {
    var dequeueValue = this.storeInstance[Object.keys(this.storeInstance)[0]];
    delete this.storeInstance[Object.keys(this.storeInstance)[0]];
    this.count--;
    return dequeueValue;
  }

  size() {
    if (this.count < 0) {
      this.count = 0;
    }
    return this.count;
  }

}


