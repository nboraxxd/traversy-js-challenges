const transposeMatrix = require('./transpose-matrix')

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(transposeMatrix(matrix)) // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
