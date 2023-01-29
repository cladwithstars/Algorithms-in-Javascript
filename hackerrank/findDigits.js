function findDigits(n) {
  // Write your code here
  return n
    .toString()
    .split("")
    .map((elem) => Number(elem))
    .reduce((acc, val) => acc + (n % val === 0 ? 1 : 0), 0);
}

console.log(findDigits(12));

s = "\na\nm";
console.log(s);
console.log(s.replace(/\s+/g, ""));
