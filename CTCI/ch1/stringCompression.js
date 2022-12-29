const compressString = (s) => {
  let res = "";
  let i = 0;
  while (i < s.length) {
    const currChar = s[i];
    let conseqCharsCount = 1;
    while (i + 1 < s.length && s[i + 1] === currChar) {
      conseqCharsCount++;
      i++;
    }
    res += `${currChar}${conseqCharsCount}`;
    i++;
  }
  return res;
};

console.log("aaaaaa", compressString("aaaaaa"), "a6");
console.log("aabcccccaaa", compressString("aabcccccaaa"), "a2b1c5a3");
