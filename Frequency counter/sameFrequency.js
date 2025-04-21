// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  let obj1 = {};
  let obj2 = {};

  let str1 = num1.toString(10);
  let str2 = num2.toString(10);

  if (str1.length != str2.length) return false;

  for (let num of str1) {
    obj1[num] ? (obj1[num] += 1) : (obj1[num] = 1);
  }
  for (let num of str2) {
    obj2[num] ? (obj2[num] += 1) : (obj2[num] = 1);
  }

  for (let key in obj1) {
    if (obj1[key] != obj2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); //false
