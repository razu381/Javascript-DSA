class simpleHashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let seed = 999;
    for (let char of key) {
      seed += char.charCodeAt(0);
    }
    return seed % 10;
  }

  set(key, val) {
    let idx = this.hash(key);
    this.table[idx] = val;
  }
  get(key, val) {
    let idx = this.hash(key);
    return this.table[idx];
  }
}

let table = new simpleHashTable(10);

table.set("Name", "Razu");
table.set("Age", 30);
table.set("Adress", "Noakhali");

console.log(table.get("Name"));
console.log(table.get("Age"));
console.log(table.get("Adress"));
