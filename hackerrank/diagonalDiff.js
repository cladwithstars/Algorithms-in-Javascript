const diagonalDiff = (mat) => {
  let lrDiagSum = 0;
  let rlDiagSum = 0;
  let lIdx = 0;
  let rIdx = mat[0].length - 1;
  for (let row = 0; row < mat.length; row++) {
    const currRow = mat[row];
    lrDiagSum += currRow[lIdx];
    rlDiagSum += currRow[rIdx];
    lIdx++;
    rIdx--;
  }
  return Math.abs(lrDiagSum - rlDiagSum);
};

console.log(
  diagonalDiff([
    [1, 2],
    [3, 4],
  ]),
  " === 0 "
);

console.log(
  diagonalDiff([
    [1, 2],
    [3, 20],
  ]),
  " === 16"
);
