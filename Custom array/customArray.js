const CAPACITY = 10;
class customArr {
  constructor(capacity = CAPACITY) {
    (this.capacity = capacity),
      (this.length = 0),
      (this.array = new Array(capacity));
  }

  push(value) {
    this.array[this.length] = value;
    this.length++;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) {
      throw new Error("index is out of bound");
    }

    if (idx === this.length) {
      this.push(value);
    } else {
      for (let i = this.length; i > idx; i--) {
        this.array[i] = this.array[i - 1];
      }
      this.array[idx] = value;
      this.length++;
    }
  }

  pop() {
    this.array[this.length - 1] = undefined;
    this.length--;
  }

  remove(idx) {
    for (let i = idx; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
  }
}

let myArray = new customArr();

myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(40);
myArray.push(50);
myArray.push(60);
myArray.push(70);
myArray.push(80);

console.log(myArray);

// myArray.pop();

// console.log("after pop: ", myArray);

myArray.remove(5);

console.log("after removal: ", myArray);
