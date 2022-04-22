/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const minLengthString = strs.reduce((a, b) => (a.length <= b.length ? a : b));
  for (let i = 0; i < minLengthString.length; i++) {
    if (!strs.every((str) => str[i] === minLengthString[i])) {
      return minLengthString.slice(0, i);
    }
  }
  return minLengthString;
};
