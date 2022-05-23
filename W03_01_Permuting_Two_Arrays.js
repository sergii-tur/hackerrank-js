/* 
W03_01_Permuting_Two_Arrays.js

There are two n-element arrays of integers, A and B. Permute them into some A' and B' 
such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.
There will be q queries consisting of A, B, and k. For each query, return YES if some
permutation A', B' satisfying the relation exists. Otherwise, return NO.

Example
A = [0, 1]
B = [0, 2]
k = 1
A valid A', B' is A' = [1, 0] and B'= [0, 2]: 1 + 0 >= 1 and 0 + 2 >= 1.
Return YES

Function description
Complete the twoArrays function in the editor below. It should return a string,
either YES or NO.
twoArrayshas the following parameter(s):
int k: an integer
int A[n]: an array of integers
int B[n]: an array of integers

Returns 
string: either YES or NO

Input Format
The first line contains an integer q, the number of queries.
The next 1 sets of 3 lines are as follows:
The first line contains two space-separated integers n and k, the size of both
arrays A and B, and the relation variable.
The second line contains n space-separated integers A[i].
The second line contains n space-separated integers B[i].

Constrains
1 <= q <= 10
1 <= n <= 1000
1 <= k <= 10^9
1 <= A[i], B[i] <= 10^9

Sample Input
STDIN       Function
-----       --------
2           q = 2
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]

Sample Output
YES
NO

Explanation
There are two queries:
1. Permute these into A'= [1, 2, 3] and B' = [9, 8, 7] so that the
following statesments are true:
A[0] + B[1] = 1 + 9 = 10 >= k
A[1] + B[1] = 2 + 8 = 10 >= k
A[2] + B[2] = 3 + 7 = 10 >= k

2. A = [1, 2, 2, 1], B = [3, 3, 3, 4], and k = 5. To permute A and B into a valid
A'and B', there must be at least three numbers in A that are greater than 1. 

*/

'use strict';

/* const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
} */

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */
/*  
Example
A = [0, 1]
B = [0, 2]
k = 1
A valid A', B' is A' = [1, 0] and B'= [0, 2]: 
1 + 0 >= 1 
0 + 2 >= 1
Return YES
*/
let k = 5;
let A = [0, 1];
let B = [0, 2];
//A = [2, 1, 3];
//B = [7, 8, 9];
A = [1, 2, 2, 1]
B = [3, 3, 3, 4]

console.log( twoArrays(k, A, B) );

function twoArrays(k, A, B) {
  // Write your code here
  let result = 'YES';
  A = A.sort(function(a, b) {return a - b}); // asc sort
  B = B.sort(function(a, b) {return b - a}); // desc sort

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      result = 'NO';
      break;
    }
  }
  
  return result;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

    const result = twoArrays(k, A, B);

    ws.write(result + '\n');
  }

  ws.end();
} */