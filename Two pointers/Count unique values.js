//problem: Count the unique values in a sorted array
//Comment: we can use frequency counter for this problem but as we are learning two pointer technique we are gonna use two pointers

//Time complexity: O(n)



function countUniqueValues(arr){
    let len = arr.length
    let slow = 0
    let fast = 1
    let uniqueCounter = 0

    while(fast <= len){
        if(arr[slow] != arr[fast]){
            uniqueCounter++
            slow = fast
            fast ++
        }else{
            fast ++
        }
    }
    return uniqueCounter
}

console.log(countUniqueValues([1,1,1,1,1,2]))//2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2,-1,-1,0,1])) //4

