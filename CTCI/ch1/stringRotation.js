const isRotation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  return `${s1}${s1}`.includes(s2);
};

console.log(isRotation("waterbottle", "erbottlewat"), true);
console.log(isRotation("waterbottle", "erbotlewatt"), false);
console.log(isRotation("aaata", "aataa"), true);
