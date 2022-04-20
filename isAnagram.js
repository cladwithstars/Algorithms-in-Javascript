const isAnagram = (s1, s2) => {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

console.log(isAnagram("hi", "ih"));

const isAnagram2 = (s1, s2) => {
  const map1 = {};
  const map2 = {};
  for (let ch of s1) {
    map1[ch] = map1[ch] + 1 || 1;
  }
  for (let ch of s2) {
    if (!map1.hasOwnProperty(ch)) {
      return false;
    }
    map1[ch]--;
    if (map1[ch] < 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram2("hello", "olelh"));
console.log(isAnagram2("hey", "heyy"));
