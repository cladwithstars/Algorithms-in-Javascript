const reverseInt = (int) => {
  return (
    parseInt(int.toString().split("").reverse().join(""), 10) * Math.sign(int)
  );
};

console.log(reverseInt(5678));
console.log(reverseInt(-2345));
