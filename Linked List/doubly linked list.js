class node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(data) {
    let newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
  }

  append(data) {
    let newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  remove(val) {
    if (!this.head) {
      throw new Error("No item is present to delete");
      return;
    }
    if (this.head.data === val) {
      if (this.tail.data === val) {
        this.head = null;
        this.tail = null;
        return;
      }
      this.head.next.prev = null;
      this.head = this.head.next;
    }

    if (this.tail.data === val) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      return;
    }

    let curr = this.head;
    do {
      if (curr.data === val) {
        console.log("DATA = ", curr.data);
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }
      curr = curr.next;
    } while (curr != null);
  }

  toString() {
    let curr = this.head;
    let str = "";
    while (curr.next !== null) {
      //   console.log(
      //     `curr => ${curr?.data} >>> prev = ${curr.prev?.data} >>> next = ${curr.next?.data}`
      //   );
      str += `${curr.data} ==>`;
      curr = curr.next;
    }
    return str + curr.data;
  }
}

let list = new doublyLinkedList();

list.append(4);
list.append(24);
list.append(114);
list.append(234);
list.append(66);
list.append(143);

console.log(list.toString());
list.remove(4);
console.log(list.toString());
list.remove(24);
console.log(list.toString());
list.remove(143);
console.log(list.toString());
