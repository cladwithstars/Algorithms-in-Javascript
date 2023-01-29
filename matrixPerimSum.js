const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// sum = 1 + 2 + 3 + 6 + 9 + 8 + 7 + 4

const perimSum = (mat) => {
  let sum = mat[0].reduce((a, b) => a + b) + mat.at(-1).reduce((a, b) => a + b);
  for (let i = 1; i < mat.length - 1; i++) {
    const row = mat[i];
    sum += row[0] + row.at(-1);
  }
  return sum;
};

console.log(perimSum(mat));

console.log(1 + 2 + 3 + 6 + 9 + 8 + 7 + 4);
