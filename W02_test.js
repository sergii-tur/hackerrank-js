/*  
W02_test

Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. 
He can reverse any of its rows or columns any number of times. The goal of the game 
is to maximize the sum of the elements in the n x n submatrix located in the upper-left 
quadrant of the matrix.
Given the initial configurations for q matrices, help Sean reverse the rows and columns 
of each matrix in the best possible way so that the sum of the elements in the 
matrix's upper-left quadrant is maximal.

Example
matrix = [[1, 2], [3, 4]]
1 2
3 4

It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:
1 2
4 3

And now reverse column 0:
4 2 
1 3

The maximal sum is 4.

Function Description
Complete the flippingMatrix function in the editor below.
flippingMatrix has the following parameters:
int matrix[2n][2n]: a 2-dimensional array of integers

Returns
int: the maximum sum possible.

Input Format
The first line contains an integer q, the number of queries.
The next q sets of lines are in the following format:
The first line of each query contains an integer, n.
Each of the next 2n lines contains space-separated integers 
matrix[i][j] in row i of the matrix.

Constraints
1 <= q <= 16
1 <= n <= 128
0 <= matrix[i][j] <= 4096, where 0 <= i, j < 2n.

Sample          Input
STDIN           Function
-----           --------
1               q = 1
2               n = 2
112 42 83 119   matrix = [[112, 42, 83, 119], [56, 125, 56, 49], \
56 125 56 49              [15, 78, 101, 43], [62, 98, 114, 108]]
15 78 101 43
62 98 114 108

Sample Output
414

Explanation
Start out with the following 2n x 2n matrix:
112   42    83    119
56    125   56    49
15    78    101   43
62    98    114   108

Perform the following operations to maximize the sum of the submatrix in the upper-left quadrant:
Reverse column (83 56 101 114 -> 114 101 56 83), resulting in the matrix:
112   42    114   119
56    125   101   49
15    78    56    43
62    98    83    108

Reverse row (112, 42, 114, 119 -> 119, 114, 42, 112), resulting in the matrix:
119   114   42    112
56    125   101   49
15    78    56    43
62    98    83    108

The sum of values in the n x n submatrix in the upper-left quadrant is
119 + 114 + 56 + 125 = 414
*/

let matrix =
[
  [1, 2],
  [3, 4]
];

matrix =
[
  [112, 42,  83,  119],
  [56,  125, 56,  49],
  [15,  78,  101, 43],
  [62,  98,  114, 108]
];
/* matrix =
[
[121, 107, 32, 194],
[103, 133, 17, 23],
[  2,  91, 62,  62],
[165, 175, 123,  8]
]; */
/* 
107 54 128 15

12 75 110 138

100 96 34 85

75 15 28 112 

incorrect 435
correct 488
*/
//console.log( flippingMatrix(matrix) );
flippingMatrix(matrix);

function flippingMatrix(matrix) {
  
  const size = matrix.length;
  const subSize = size/2; // matrix size is always even, 2n x 2n
  console.table(matrix);
  subMatrixSum(1);
  subMatrixSum(2);
  subMatrixSum(3);
  subMatrixSum(4);

  
  function subMatrixSum(sector) {
    let startCol = 0;
    let startRow = 0;
    let endCol = 0;
    let endRow = 0;
    
    if (sector === 1) {startRow = 0; endRow = subSize; startCol = 0; endCol = subSize;}
    if (sector === 2) {startRow = 0; endRow = subSize; startCol = subSize; endCol = size;}
    if (sector === 3) {startRow = subSize; endRow = size; startCol = 0; endCol = subSize;}
    if (sector === 4) {startRow = subSize; endRow = size; startCol = subSize; endCol = size;}
    
    let subSum = 0;

    for (let i = startRow; i < endRow; i++) {
      for (let j = startCol; j < endCol; j++) {
        subSum += matrix[i][j];
        //console.log(matrix[i][j]);
      }
    }
    return subSum;
  }
  /* function subMatrixSum(subSize) {
    let subSum = 0;

    for (let i = 0; i < subSize; i++) {
      for (let j = 0; j < subSize; j++) {
        subSum += matrix[i][j];
      }
    }
    return subSum;
  } */

  function reverseColumn(col, size) {
    let temp = 0;
    for (let i = 0; i < size/2; i++) {
      temp = matrix[i][col];
      matrix[i][col] = matrix[size-1-i][col];
      matrix[size-1-i][col] = temp;
    }
    //console.table(matrix);
  }

  function reverseRow(row, size) {
    let temp = 0;
    for (let j = 0; j < size/2; j++) {
      temp = matrix[row][j];
      matrix[row][j] = matrix[row][size-1-j];
      matrix[row][size-1-j] = temp;
    }
    //console.table(matrix);
  }
  /* // check colums from last to size/2
  let colSum1 = 0;
  let colSum2 = 0;
  for (let col = size-1; col >= size/2; col--) {
    for (let row = 0; row < size; row++) {
      if (row < size/2) colSum1 += matrix[row][col];
      else colSum2 += matrix[row][col];
    }
    if (colSum1 < colSum2) reverseColumn(col, size); 
    //console.log("colSum1 = " + colSum1, "colSum2 = " + colSum2);
    colSum1 = 0;
    colSum2 = 0;
  }
  
  // check rows from first to size/2
  let rowSum1 = 0;
  let rowSum2 = 0;
  for (let row = 0; row < size/2; row++) {
    for (let col = 0; col < size; col++) {
      if (col < size/2) rowSum1 += matrix[row][col];
      else rowSum2 += matrix[row][col];
    }
    if (rowSum1 < rowSum2) reverseRow(row, size); 
    //console.log("colSum1 = " + colSum1, "colSum2 = " + colSum2);
    rowSum1 = 0;
    rowSum2 = 0; 
  }

  for (let col = 0; col < size/2; col++) {
    for (let row = 0; row < size; row++) {
      if (row < size/2) colSum1 += matrix[row][col];
      else colSum2 += matrix[row][col];
    }
    if (colSum1 < colSum2) reverseColumn(col, size); 
    //console.log("colSum1 = " + colSum1, "colSum2 = " + colSum2);
    colSum1 = 0;
    colSum2 = 0;
  }
  
  console.table(matrix);

  return subMatrixSum(subSize); */
}