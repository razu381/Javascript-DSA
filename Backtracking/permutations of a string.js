let count = 0;
function combination(choices, path = [], result = []) {
  if (choices.length === path.length) {
    result.push([...path]);
    count++;
    return;
  }

  for (let i = 0; i < choices.length; i++) {
    if (path.includes(choices[i])) continue;
    path.push(choices[i]);
    combination(choices, path, result);
    path.pop();
  }
  return result;
}

//const result = [];

console.log(combination("boat"));
console.log("Total combinations: ", count);
