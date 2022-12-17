/*
Given a phrase, substitute each character by shifting it up or down the 
alphabet by a given integer. If necessary, 
the shifting should wrap around back to the beginning or end of the alphabet.
*/

const caeserCypher = (s, num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = s.toLowerCase();
  let res = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const idx = alphabet.indexOf(char);
    const newCharIdx = (idx + num) % 26;
    res = res + alphabet[newCharIdx];
  }
  return res;
};

console.log(caeserCypher("Hello my name is will", 7));
