//write a function callled maxSubArraySum which accepts an array of integers and a number called n .The function should calcualte the maximum sum of n consecutive  elements in the array
// O(n**2)

function maxSubArraySum(arr, n) {
  if (arr.length < n || arr.length === 0) {
    return null;
  }
  let max = -Infinity;
  let temp = 0;

  for (let i = 0; i < n; i++) temp += arr[i];

  for (let i = n; i < arr.length - 1; i++) {
    temp = temp + arr[i] - arr[i - n];
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6, 1], 1));
console.log(maxSubArraySum([], 1));
