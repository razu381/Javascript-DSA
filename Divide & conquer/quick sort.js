function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function mergeSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  let pivot = partition(arr, low, high);

  mergeSort(arr, low, pivot - 1);
  mergeSort(arr, pivot + 1, high);
  return arr;
}
console.log(mergeSort([8, 9, 6, 7, 0, 2, 1]));
