/*
return the mean, median, and mode of input array or ints arr
*/

const meanMedianMode = (arr) => {
  const res = {};
  const sorted = arr.sort((a, b) => a - b);
  res["Median"] = sorted[Math.floor(arr.length / 2)];
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  res["Mean"] = parseFloat((sum / arr.length).toFixed(2));
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  const mode = Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
  res["Mode"] = parseInt(mode, 10);
  return res;
};

console.log(meanMedianMode([1, 1, 2, 3]));
console.log(meanMedianMode([1, 2, 3, 4, 4, 5, 5]));
