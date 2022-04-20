/*
reverse each word in the phrase and return 
*/

const reverseWords = (phrase) => {
  const words = phrase.split(" ");
  const revString = (s) => s.split("").reverse("").join("");
  return words.map((word) => revString(word)).join(" ");
};

console.log(reverseWords("Hello my name is bob!"));
