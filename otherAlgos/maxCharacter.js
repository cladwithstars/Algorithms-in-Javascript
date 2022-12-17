/*
Given a string of characters, return the character that appears the most often.
*/

const maxCharacter = (s) => {
  if (!s) return "";
  const map = {};
  for (let char of s) {
    map.hasOwnProperty(char) ? map[char]++ : (map[char] = 1);
  }

  return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

module.exports = maxCharacter;
