/*
 *The distance between two array values is the number of indices between them. Given ,
 * find the minimum distance between any pair of equal elements in the array. If no such value exists, return .
 *
 * https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
  const map = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] in map) {
      map[a[i]].push(i);
    } else {
      map[a[i]] = [i];
    }
  }
  let res = Infinity;
  for (let key in map) {
    if (map[key].length > 1) {
      res = Math.min(res, minDistance(map[key]));
    }
  }
  return res === Infinity ? -1 : res;
}

const minDistance = (arr) => {
  let res = Infinity;
  let i = 0,
    j = 1;
  while (j < arr.length) {
    res = Math.min(res, arr[j] - arr[i]);
    i++;
    j++;
  }
  return res;
};
