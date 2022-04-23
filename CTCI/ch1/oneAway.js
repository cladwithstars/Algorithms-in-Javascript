const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  const longer = str1.length >= str2.length ? str1 : str2;
  const shorter = longer === str1 ? str2 : str1;
  const sameLength = longer.length === shorter.length;

  let idx1 = 0,
    idx2 = 0;
  let foundDiff = false;

  while (idx1 < longer.length && idx2 < shorter.length) {
    if (longer[idx1] !== shorter[idx2]) {
      if (foundDiff) return false;
      foundDiff = true;
      if (sameLength) {
        idx1++; // move both pointers
        idx2++;
      } else {
        idx1++; // this is a replace, so just move the longer pointer
      }
    } else {
      idx1++; // move both pointers if we have a match
      idx2++;
    }
  }
  return true;
};

console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
console.log(oneAway("hello", "hel"), false);
