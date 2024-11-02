//write a function called sum zero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both valus that sum to zero or undefined if a pair doesn't exist

//Time complexity: O(n)

function sumZero(arr){
    let start = 0;
    let end = arr.length - 1

    while(start < end ){
        if(arr[start] + arr[end] == 0) return [arr[start],arr[end]]
        else if(arr[start] + arr[end] > 0) end -= 1
        else start += 1
    }
    return undefined
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) //undefined