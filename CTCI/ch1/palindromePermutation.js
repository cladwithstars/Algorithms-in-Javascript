// the problem is reduced to checking if
// input string has no more than one char count that is odd
const isPalindromePermutation = (phrase) => {
  const hash = {};
  const formattedPhrase = phrase.toLowerCase().replace(/ /g, ""); // ignore whitespace and character case
  for (let char of formattedPhrase) {
    hash[char] = hash[char] + 1 || 1;
  }
  let foundOdd = false;
  for (let char of formattedPhrase) {
    if (hash[char] % 2 === 1) {
      if (foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }
  return true;
};

console.log(isPalindromePermutation("Tact Coa"), true);
