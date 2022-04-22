/**
 * https://leetcode.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const notInArr2 = arr1
    .filter((num) => !arr2.includes(num))
    .sort((a, b) => a - b);

  const hash = {};

  arr1
    .filter((num) => arr2.includes(num))
    .forEach((num) =>
      hash.hasOwnProperty(num) ? hash[num].push(num) : (hash[num] = [num])
    );

  const relativeSort = arr2.map((num) => hash[num]).flat();

  return [...relativeSort, ...notInArr2];
};
