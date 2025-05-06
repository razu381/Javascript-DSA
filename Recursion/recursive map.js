let arr = [1, 2, 3, 4, 5];

function recMap(arr, newArray = []) {
  if (arr.length === 0) return newArray;
  newArray.push(arr[0] * 2);
  return recMap(arr.slice(1), newArray);
}

console.log(recMap(arr));

//imporoved

function recmap2(arr, idx = 0, newArray = []) {
  if (idx === arr.length) return newArray;
  newArray.push(arr[idx] * 3);
  return recmap2(arr, idx + 1, newArray);
}

console.log(recmap2(arr));
