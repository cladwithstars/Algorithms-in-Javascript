/*
Given a string of words or phrases, count the number of vowels.
*/

const countVowels = (s) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return s.split("").filter((ch) => vowels.includes(ch)).length;
};

console.log(countVowels("hello"));
