const areAnagrams = (s1, s2) => {
  const map = {};
  for (let ch of s1) {
    map[ch] = (map[ch] || 0) + 1;
  }
  for (let ch of s2) {
    if (!(ch in map)) return false;
    map[ch]--;
    if (map[ch] < 0) return false;
  }
  for (let key in map) {
    if (map[key] !== 0) return false;
  }
  return true;
};

console.log(areAnagrams("hell", "llhe"));
console.log(areAnagrams("hell", "lhe"));
