//write a function callled maxSubArraySum which accepts an array of integers and a number called n .The function should calcualte the maximum sum of n consecutive  elements in the array
// O(n**2)

function maxSubArraySum(arr, n) {
  if (arr.length < n || arr.length === 0) {
    console.log(null);
    return null;
  }
  let max = -Infinity;

  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }

  console.log(max);
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); //17
maxSubArraySum([4, 2, 1, 6, 1], 1); //6
maxSubArraySum([], 4); //null
