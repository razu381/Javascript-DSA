// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true

var uniqueOccurrences = function(arr) {
    let obj1 = {};
    for(let val of arr){
        if(obj1.hasOwnProperty(val)) obj1[val] += 1
        else obj1[val] = 1
    }
    let obj1Values = Object.values(obj1)
    let obj2 = {}
    for(let val of obj1Values){
        if(obj2.hasOwnProperty(val)) return false //means it's not unique
        else obj2[val] = val
    }
    return true
};

console.log(uniqueOccurrences([1,2,2,2,1,1,3]))