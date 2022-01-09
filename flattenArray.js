/**
 *
 * @param {Array<number | Array>} arr nested array of integers
 * @return {Array<number>} array of integers
 */
const flatten = (arr) => {
  return arr.flat(Infinity);
};

const arr1 = [[12, 3], 4, [5, 6, [7, 9]], 65];

const res1 = flatten(arr1);
console.log(res1);
// expect [12, 3, 4, 5, 6, 7, 9, 65]

const arr2 = [1, 2, 3, [4, 5]];
const res2 = flatten(arr2);
console.log(res2);
