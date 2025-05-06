let arr = [3, 5, 8, 12, 15, 18, 22, 50];

function binarySearch(arr, low = 0, high = arr.length - 1, target) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, high, target);
  }
  return binarySearch(arr, low, mid - 1, target);
}

console.log(binarySearch(arr, 0, arr.length - 1, 1));
