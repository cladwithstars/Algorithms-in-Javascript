// replace all spaces with '%20'
const urlify = (s, len) => {
  return s.trim().replace(/ /g, "%20");
  // without regex: return s.trim().split(" ").join("%20");
};

const inputStr = "Mr John Smith    ";
console.log(urlify(inputStr, 13), "Mr%20John%20Smith");
