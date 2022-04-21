/*
return arr of all primes up to n
*/

const sievePrimes = (n) => {
  if (n < 2) {
    return [];
  }
  const primes = [2];
  for (let num = 3; num <= n; num++) {
    if (!primes.some((prime) => num % prime === 0)) {
      primes.push(num);
    }
  }
  return primes;
};

console.log(sievePrimes(100));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  const possibleDividers = [];
  for (let num = 2; num < Math.sqrt(n) + 1; num++) {
    possibleDividers.push(num);
  }
  return !possibleDividers.some((val) => n % val === 0);
};
const sievePrimes2 = (n) => {
  if (n < 2) {
    return [];
  }
  const nums = [];
  for (let num = 1; num <= n; num++) {
    nums.push(num);
  }
  return nums.filter((num) => isPrime(num));
};

console.log(isPrime(10));
console.log(isPrime(17));
console.log(isPrime(2));
console.log(sievePrimes2(100));
console.log(sievePrimes2(2));
