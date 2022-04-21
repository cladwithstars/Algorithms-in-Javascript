const memo = [1, 1];
const fib = (n) => {
  if (n == 1 || n == 2) return 1;
  if (n < memo.length) return memo[n];
  for (let i = memo.length; i <= n; i++) {
    memo.push(memo[i - 1] + memo[i - 2]);
  }
  return memo[memo.length - 1];
};

console.log(fib(5));
console.log(fib(2000));
