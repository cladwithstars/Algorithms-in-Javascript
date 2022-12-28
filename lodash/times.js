const getRandomNum = (multiplier = 100) => {
  return Math.round(Math.random() * multiplier);
};

const times = (numTimes, callback, ...rest) => {
  const res = [];
  for (let i = 0; i < numTimes; i++) {
    res.push(callback(...rest));
  }
  return res;
};

console.log(times(5, getRandomNum, 10));
console.log(times(3, getRandomNum, 100));
console.log(times(10, getRandomNum, 10000));
