const memo = [1, 1]; // this would be saved to a db/store or whatever, for instant lookup later
const fib = (n) => {
  if (n < 1 || !Number.isInteger(n)) return "invalid argument";
  if (n == 1 || n == 2) return 1;
  if (n < memo.length) return memo[n];
  for (let i = memo.length; i <= n; i++) {
    memo.push(memo[i - 1] + memo[i - 2]);
  }
  return memo[memo.length - 1];
};

const fibDynamic = (n) => {
  if (n < 1 || !Number.isInteger(n)) return "invalid argument";
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
console.log(fibDynamic(-1));
console.log(fibDynamic(99.8));
console.log(fibDynamic(1));
console.log(fibDynamic(5));
console.log(fibDynamic(20));
console.log(fib(5));
console.log(fib(2000));
