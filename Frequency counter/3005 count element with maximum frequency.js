// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

 

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

//solution with time complexity of O(n)
function findFrequency(nums){
    let obj1 = {}
    for(let val of nums){
        obj1.hasOwnProperty(val) ? obj1[val] += 1 : obj1[val] = 1
    }

    
    let maxNum = Math.max(...Object.values(obj1))

    let mostFrequent = 0;
    Object.values(obj1).forEach(val => {
        if(val == maxNum) mostFrequent+= val
    })


    console.log(obj1)
    console.log(Object.values(obj1))
    console.log(mostFrequent)
}


findFrequency([1,2,2,3,1,4])
findFrequency([1,2,3,4,5])

findFrequency([10,12,11,9,6,19,11])