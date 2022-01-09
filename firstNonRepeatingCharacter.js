function solution(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (const key in map) {
    if (map[key] == 1) {
      return key;
    }
  }
  return "_";
}

s = "abacabad";
console.log(solution(s)); // expect 'c'

s = "abacabaabacaba";
console.log(solution(s)); // expect  = '_'
