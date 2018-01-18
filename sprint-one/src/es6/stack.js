class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.store = {};
    this.count = 0;
  }
  
  pop() {
    this.count--;
    var popValue = this.store[this.count];
    delete this.store[this.count];
    return popValue;
  }
  
  push(value) {
    this.store[this.count] = value;
    this.count++;

  }

  size() {
    if (this.count < 0) {
      this.count = 0;
    }
    return this.count;
    
  }

}

