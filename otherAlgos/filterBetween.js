const filterBetween = (arr, n1, n2) => {
  return n1 >= n2 ? [] : arr.filter((val) => val < n2 && val > n1);
};

console.log(filterBetween([1, 2, 3, 4, 5, 6, 7], 3, 6));
console.log(filterBetween([1, 2, 3, 4, 5, 6, 7], 6, 3));
