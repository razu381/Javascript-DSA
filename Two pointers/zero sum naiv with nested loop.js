//write a function called sum zero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both valus that sum to zero or undefined if a pair doesn't exist

//Time complexity: O(n**2)

function sumZero(arr){
    for(let i= 0; i < arr.length; i++ ){
        for(let j=i+1; j < arr.length; j++){
            if((arr[i] + arr[j]) === 0){
                return [arr[i],arr[j]]
            } 
        }
    }
    return undefined
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) //undefined