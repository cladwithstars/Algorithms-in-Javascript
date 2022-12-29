function pageCount(n, p) {
  // Write your code here
  let l = 0,
    r = 1;
  let count = 0;
  while (p > r) {
    count++;
    l += 2;
    r += 2;
  }
  //   console.log(count, n - count);
  return Math.min(count, Math.floor(n / 2) - count);

  //   return Math.min(count, n - count);
}

console.log(pageCount(10, 1), "0");
console.log(pageCount(20, 19), "1");
console.log(pageCount(20, 20), "0");
console.log(pageCount(50, 20), "10");
