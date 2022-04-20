const reverseArr = (arr) => {
  let i = 0;
  while (i < arr.length / 2) {
    [arr[i], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[i]];
    i++;
  }
  return arr;
};

console.log(reverseArr([1, 2, 3, 4, 5, 6, 7]));
