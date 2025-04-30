class Node {
  constructor(key, value) {
    (this.key = key), (this.value = value);
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(key, val) {
    let newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  find(key) {
    if (!this.head) return null;
    let curr = this.head;

    while (curr) {
      if (curr.key === key) return curr.value;
      curr = curr.next;
    }

    return null;
  }

  remove(key) {
    if (!this.head) return null;
    if (this.head.key === key) {
      this.head = this.head.next;
      return true;
    }

    let curr = this.head;
    let prev = null;

    while (curr && curr.key !== key) {
      prev = curr;
      curr = curr.next;
    }

    if (curr) {
      prev.next = curr.next;
      return true;
    }
    return null;
  }

  *entries() {
    let curr = this.head;
    while (curr) {
      yield [curr.key, curr.value];
      curr = curr.next;
    }
  }
}

export class HashTable {
  #keys;
  constructor(size) {
    (this.size = size), (this.table = new Array(size));
    this.count = 0;
    this.#keys = new Set();
  }

  hash(key) {
    let seed = 5381;
    for (let char of key) {
      seed = (seed * 33) ^ char.charCodeAt(0);
    }
    return Math.abs(seed) % this.size;
  }

  set(key, value) {
    if (this.count / this.size >= 0.5) {
      this.resize(this.size * 2);
    }

    let idx = this.hash(key);
    if (!this.table[idx]) {
      this.table[idx] = new LinkedList();
    }

    let bucket = this.table[idx];
    let isItemPresent = bucket.find(key);
    if (!isItemPresent) {
      this.count++;
      this.#keys.add(key);
      bucket.insert(key, value);
    } else {
      throw Error(`key already present`);
    }
  }

  get(queryKey) {
    let idx = this.hash(queryKey);
    if (!this.table[idx]) return null;
    let bucket = this.table[idx];

    // for (let [key, value] of bucket.entries()) {
    //   if (queryKey === key) return value;
    // }
    // let curr = bucket.head;
    // while (curr) {
    //   if (curr.key === queryKey) {
    //     return curr.value;
    //   }
    //   curr = curr.next;
    // }
    let isPresent = bucket.find(queryKey);
    if (isPresent) {
      return isPresent;
    } else {
      return null;
    }
  }

  remove(key) {
    if (this.#keys.has(key)) {
      this.#keys.delete(key);
    }
    let idx = this.hash(key);
    let bucket = this.table[idx];

    bucket.remove(key);
  }

  keys() {
    return Array.from(this.#keys);
  }

  values() {
    let values = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let [, value] of bucket.entries()) {
          values.push(value);
        }
      }
    }

    return values;
  }

  resize(newSize) {
    let oldtable = this.table;
    this.size = newSize;
    this.table = new Array(newSize);
    this.count = 0;

    for (let bucket of oldtable) {
      if (bucket) {
        for (let [key, value] of bucket.entries()) {
          this.set(key, value);
          this.count++;
        }
      }
    }
  }
}

// let table = new HashTable(10);

// table.set("Name", "Razu");
// table.set("address", "Noakhali");
// table.set("age", 50);
// table.set("profession", "software engineer");

// console.log(table.keys());
// console.log(table.values());

// table.remove("Name");

// console.log(table.keys());
// console.log(table.values());

// console.log(JSON.stringify(table.table, null, 5));
//console.log(table.table);
