const binSearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivot = (left + right) / 2;
    if (arr[pivot] === target) return pivot;
    else if (arr[pivot] < target) {
      left = pivot + 1;
    } else if (arr[pivot] > target) {
      right = pivot - 1;
    }
  }
};
