/*
method that zeroes out row i and col j of matrix if val at mat[i][j] === 0

 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 
*/
const zeroMatrix = (mat) => {
  if (!mat) {
    return "invalid input";
  }
  const rows = mat.length;
  const cols = mat[0].length;
  const rowZeroes = Array(rows).fill(false);
  const colZeroes = Array(cols).fill(false);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (mat[row][col] === 0) {
        rowZeroes[row] = true;
        colZeroes[col] = true;
      }
    }
  }
  for (let row = 0; row < rowZeroes.length; row++) {
    if (rowZeroes[row]) {
      for (let col = 0; col < cols; col++) {
        mat[row][col] = 0;
      }
    }
  }
  for (let col = 0; col < colZeroes.length; col++) {
    if (colZeroes[col]) {
      for (let row = 0; row < rows; row++) {
        mat[row][col] = 0;
      }
    }
  }
  return mat;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 11, 12],
  [13, 14, 15, 0],
  [17, 18, 19, 20],
];
const expected = [
  [1, 0, 3, 0],
  [5, 0, 7, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [17, 0, 19, 0],
];

console.log(
  JSON.stringify(zeroMatrix(matrix)) === JSON.stringify(expected),
  true
); // comprehesive tests in the .spec file

module.exports = zeroMatrix;
