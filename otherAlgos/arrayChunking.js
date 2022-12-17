/*
Given an array and a size, split the array items into a list of arrays of the given size.
([1, 2, 3, 4], 2) => [[1, 2], [3, 4]])
*/

const arrayChunk = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
};

console.log(arrayChunk([1, 2, 3, 4], 3));
