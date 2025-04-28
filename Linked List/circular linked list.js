class node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class circularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  prepend(data) {
    let newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      this.size++;
      return;
    }

    let curr = this.head;
    while (curr.next !== this.head) {
      curr = curr.next;
    }
    newNode.next = this.head;
    this.head = newNode;
    curr.next = this.head;
    this.size++;
  }

  append(data) {
    let newNode = new node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      this.size++;
      //console.log("node added", data);
      return;
    }

    let curr = this.head;
    let prev = null;
    while (curr.next != this.head) {
      curr = curr.next;
    }

    curr.next = newNode;
    newNode.next = this.head;
    this.size++;
    //console.log("node added", data);
  }

  remove(val) {
    if (this.head.data === val) {
      if (this.size === 1) {
        this.head = null;
        return;
      } else {
        let last = this.head;
        while (last.next !== this.head) {
          last = last.next;
        }

        this.head = this.head.next;
        last.next = this.head;
        return;
      }
      this.size--;
    }

    let prev = null;
    let curr = this.head;

    do {
      if (curr.data === val) {
        prev.next = curr.next;
        return;
      }
      prev = curr;
      curr = curr.next;
    } while (curr.next !== this.head);
  }

  toString() {
    let str = "";
    let curr = this.head;

    while (curr.next != this.head) {
      str += `${curr.data} =>`;
      curr = curr.next;
    }

    return str + curr.data;
  }
}

let list = new circularLinkedList();

list.append(430);
list.append(120);
list.append(10);
list.append(90);
list.append(60);
list.prepend(33);
console.log(list.toString());

list.remove(10);
console.log(list.toString());
