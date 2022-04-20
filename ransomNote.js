/*
Given a magazine of words and a ransom note, determine 
if it’s possible to “cut out” and create the ransom 
note from the magazine words.
*/

const ransomNote = (words, note) => {
  const wordsMap = {};
  for (let ch of words) {
    if (ch != " ") {
      wordsMap[ch] = wordsMap[ch] + 1 || 1;
    }
  }
  const noteMap = {};
  for (let ch of note) {
    if (ch != " ") {
      noteMap[ch] = noteMap[ch] + 1 || 1;
    }
  }
  for (const key in noteMap) {
    if (!wordsMap.hasOwnProperty(key) || wordsMap[key] < noteMap[key]) {
      return false;
    }
  }

  return true;
};

console.log(ransomNote("Hello this is magazine text", "text miss")); // true
console.log(ransomNote("Hello this is magazine text", "BLAH!")); // false
