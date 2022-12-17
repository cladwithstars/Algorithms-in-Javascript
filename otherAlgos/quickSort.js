const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const lessThan = [];
  const greaterThan = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      lessThan.push(arr[i]);
    } else {
      greaterThan.push(arr[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
};

console.log(quickSort([55, 1, 33, 42, 777, 23, 333]));
