class node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    let newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  append(data) {
    let newNode = new node(data);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
  }

  insertAt(idx, data) {
    if (idx < 0 || idx > this.size) {
      console.log("invalid index");
      throw new Error("invalid index");
    }

    let newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let count = 0;
    let curr = this.head;
    let prev = null;
    console.log(this.size);
    while (count < idx) {
      prev = curr;
      curr = curr.next;
      count++;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  length() {
    if (!this.head) return 0;

    let len = 0;
    let curr = this.head;

    while (curr) {
      len++;
      curr = curr.next;
    }

    return len;
  }

  toString() {
    let curr = this.head;
    let result = "";

    while (curr) {
      result += `${curr.data} =>  `;
      curr = curr.next;
    }

    return result;
  }
}

let list = new singlyLinkedList();

list.append(430);
list.append(120);
list.append(10);
list.append(90);
list.insertAt(0, 45);
list.insertAt(4, 41);
// list.insertAt(1, 11);
// list.insertAt(5, 11);
list.insertAt(4, 112);

console.log(list.toString());
//console.log(list.length());
