const longestSubseq = (s1, s2) => {
  const filtered1 = s1.split("").filter((ch) => s2.includes(s2));
  const filtered2 = s2.split("").filter((ch) => s1.includes(ch));
  const s1Subseqs = getAllSubseqs(filtered1.join(""));
  const s2Subseqs = new Set(getAllSubseqs(filtered2.join("")));
  for (let seq of s1Subseqs) {
    if (s2Subseqs.has(seq)) return seq;
  }
  return "";
};

const getAllSubseqs = (s) => {
  const res = [];
  function recurse(curr, idx) {
    if (idx >= s.length) {
      res.push(curr);
      return;
    }
    recurse(curr + s[idx], idx + 1);
    recurse(curr, idx + 1);
  }
  recurse("", 0);
  return res;
};

console.log(getAllSubseqs(""));

s = "hello";
s2 = "hello";
console.log(longestSubseq(s, s2));
console.log(longestSubseq("h", ""));
console.log(longestSubseq("helllllllllo", "hjjsefflsalllaaslf"));
