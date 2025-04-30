import { HashTable } from "./Advanced hash table.js";

class HashSet {
  constructor() {
    this.data = new HashTable(10);
    this.count = 0;
  }
  has(val) {
    return !!this.data.get(val);
  }
  add(val) {
    if (this.has(val)) return;
    this.data.set(val, true);
    this.count++;
  }
  get(val) {
    return this.data.get(val);
  }
  remove(key) {
    return this.data.remove(key);
  }
  values() {
    return this.data.keys();
  }

  union(otherSet) {
    let newSet = new HashSet();

    for (let key of this.values()) {
      newSet.add(key);
    }
    for (let key of otherSet.values()) {
      newSet.add(key);
    }

    return newSet;
  }
  difference(otherSet) {
    let difference = [];
    for (let key of this.values()) {
      if (!otherSet.has(key)) difference.push(key);
    }
    return difference;
  }
  intersection(otherSet) {
    let common = [];
    for (let key of this.values()) {
      if (otherSet.has(key)) common.push(key);
    }

    return common;
  }

  subset(otherset) {
    for (let key of this.values()) {
      if (!otherset.has(key)) return false;
    }
    return true;
  }
}

let set1 = new HashSet();
set1.add("Razu");
set1.add("Roman");

let set2 = new HashSet();
set2.add("Razu");
set2.add("Rihan");
set2.add("Riyan apu");
set2.add("Roan");
set2.add("Rihana");
set2.add("Rihana");
set2.add("Rihana");

console.log(set1.subset(set2));

//console.log(set1.table);
