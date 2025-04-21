var removeDuplicates = function (nums) {
  let slow = 0;
  let fast = slow + 1;

  while (fast < nums.length) {
    // console.log(nums);
    // console.log(
    //   `
    //   slow => value = ${nums[slow]} index = ${slow}
    //   fast => value =  ${nums[fast]} index = ${fast}`
    // );
    let frequencyCount = 0;
    let prevSlow = slow;
    while (nums[slow] === nums[fast]) {
      frequencyCount += 1;
      slow = fast;
      fast++;
    }
    nums.splice(prevSlow, frequencyCount);
    // if (nums[slow] === nums[fast]) {
    //   nums.splice(slow, 1);
    // }
    slow = fast;
    fast++;
  }
  //console.log("final array = ", newArr);
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
