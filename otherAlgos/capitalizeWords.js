/*
Given a phrase, capitalize every word.
*/

const capitalizeWords = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalizeWords("hello this is an example sentence"));
