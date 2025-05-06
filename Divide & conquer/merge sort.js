function merge(left, right) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) mergedArray.push(left[i++]);
    else mergedArray.push(right[j++]);
  }

  //now check if there any item left in left  array
  while (i < left.length) {
    mergedArray.push(left[i++]);
  }
  //check if there is  any item left on right array
  while (j < right.length) {
    mergedArray.push(right[j++]);
  }
  return mergedArray;
}

function mergeSort(arr, low = 0, high = arr.length - 1) {
  if (low === high) return [arr[low]];
  let mid = Math.floor((low + high) / 2);

  let left = mergeSort(arr, low, mid);

  let right = mergeSort(arr, mid + 1, high);

  return merge(left, right);
}

console.log(mergeSort([5, 2, 6, 3, 3, 3, 1, 4]));
