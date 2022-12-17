/*
Given an array of numbers, 
return all pairs that add up to a given sum. 
The numbers can be used more than once.
*/
const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};
const twoSum = (arr, targetSum) => {
  res = [];
  const set = new Set(arr.map((num) => targetSum - num));
  for (let num of arr) {
    if (set.has(num)) {
      const duplicate = res.some((arr) =>
        arraysEqual(arr, [num, targetSum - num])
      );
      if (!duplicate) {
        res.push([num, targetSum - num]);
      }
    }
  }

  return res;
};

console.log(twoSum([1, 2, 2, 3, 4], 4)); //  [[2, 2], [3, 1]]
