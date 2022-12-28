const merge = (arr1, arr2) => {
  let i = 0,
    j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  return i < arr1.length
    ? res.concat(arr1.slice(i))
    : res.concat(arr2.slice(j));
};

let arr1 = [1, 2, 7, 20, 124, 1200000],
  arr2 = [0, 3, 19, 44, 77, 90, 150, 1000];

console.log(merge(arr1, arr2));

const sorted = arr1.concat(arr2).sort((a, b) => a - b);

console.log(sorted);

console.log(arr1 + arr2);
