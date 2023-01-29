/*
 * Complete the 'kaprekarNumbers' function below.
 * https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=true
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
  // Write your code here
  let count = 0;
  const kNums = [];
  for (let i = p; i <= q; i++) {
    if (isKNum(i)) {
      count++;
      kNums.push(i);
    }
  }
  if (count === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(kNums.join(" "));
  }
}

const isKNum = (num) => {
  const squared = num * num;
  const strNum = squared.toString();
  const midIdx = Math.floor(strNum.length / 2);
  const left = Number(strNum.slice(0, midIdx));
  const right = Number(strNum.slice(midIdx));
  return left + right === num;
};
