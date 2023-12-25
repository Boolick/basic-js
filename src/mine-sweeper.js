const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];

  function countMines(row, col) {
    let count = 0;

    const positions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [dx, dy] of positions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
        count += matrix[newRow][newCol] ? 1 : 0;
      }
    }

    return count;
  }

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < columns; j++) {
      newRow.push(matrix[i][j] ? 1 : countMines(i, j));
    }
    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};
