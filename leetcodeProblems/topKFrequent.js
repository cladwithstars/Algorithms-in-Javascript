/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = {};
  nums.forEach((num) => (hash[num] = hash[num] + 1 || 1));
  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .map((val) => val[0])
    .slice(0, k);
};
