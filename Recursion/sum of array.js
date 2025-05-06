let arr = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr));

//improved

function sumOfArray2(arr, idx = 0) {
  if (idx === arr.length) return 0;
  return arr[idx] + sumOfArray(arr, idx + 1);
}

console.log(sumOfArray2(arr));
