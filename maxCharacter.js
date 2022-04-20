/*
Given a string of characters, return the character that appears the most often.
*/

const maxCharacter = (s) => {
  const map = {};
  for (let char of s) {
    map.hasOwnProperty(char) ? map[char]++ : (map[char] = 1);
  }

  return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

console.log(maxCharacter("helllllllloooooh")); // l
