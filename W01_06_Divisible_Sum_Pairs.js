/* 
W1_06_Divisible_Sum_Pairs.js

Given an array of integers and a positive integer k, determine the number of 
(i, j) pairs where i < j and ar[j] is divisible by k.

Example
ar  = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].

Function Description
Complete the divisibleSumPairs function in the editor below.
divisibleSumPairs has the following parameter(s): 
- int n: the length of array ar
- int ar[n]: an array of integers
- int k: the integer divisor

Returns
- int: the number of pairs

Input Format
The first line contains 2 space-separated integers, n and k.
The second line contains n space-separated integers, each a value of arr[i]. 

Constraints
- 2 <= n <= 100
- 1 <= k <= 100
- 1 <= ar[i] <= 100

Sample Input
STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

Sample Output
5

Explanation
Here are 5 valid pairs when k = 3
(0, 2) -> ar[0] + ar[2] = 1 + 2 = 3
(0, 5) -> ar[0] + ar[5] = 1 + 2 = 3
(1, 3) -> ar[1] + ar[3] = 3 + 6 = 9
(2, 4) -> ar[2] + ar[4] = 2 + 1 = 3
(4, 5) -> ar[4] + ar[5] = 1 + 2 = 3

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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
const n = 6; 
const k = 5;
const ar = [1, 2, 3, 4, 5, 6];
// Output 3


console.log( divisibleSumPairs(n, k, ar) );

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  // Constrains
  if (n < 2 || n > 100) return 0;
  if (k < 1 || k > 100) return 0;

  const size = ar.length;
  if (n !== size) {
    console.log("error: first argument n != array size");
    return 0;
  }

  let nPairs = 0;

  for (let i = 0; i < size-1; i++) {
    if (ar[i] < 1 || ar[i] > 100) return 0; // Constrains
    for (let j = i+1; j <= size; j++) {
      if (i < j && (ar[i]+ar[j]) % k === 0) {
        nPairs++;
        //console.log("(" + ar[i] + ", " + ar[j] + ")");
      }
    }
  }

  return nPairs;

}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

  const result = divisibleSumPairs(n, k, ar);

  ws.write(result + '\n');

  ws.end();
} */