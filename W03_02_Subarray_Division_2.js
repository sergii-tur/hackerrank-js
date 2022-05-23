/* 
W03_02_Subarray_Division_2.js

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

Example
s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d = 4 with a length 
equalling his birth month, m = 2. In this case, there are two segments meeting her criteria: 
[2, 2] and [1, 3].

Function Description
Complete the birthday function in the editor below.
birthday has the following parameter(s):
int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month

Returns
int: the number of ways the bar can be divided

Input Format
The first line contains an integer n, the number of squares in the chocolate bar.
The second line contains space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.

Constrains
1 <= n <= 100
1 <= s[i] <= 5, where (0 <= i < n)
1 <= d <= 31
1 <= m <= 12

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

/* 
s = [2, 2, 1, 3, 2]
d = 4
m = 2 
*/
const s = [2, 2, 1, 3, 2]; // 2
const d = 4;
const m = 2;

console.log( birthday(s, d, m) );

function birthday(s, d, m) {
  // Write your code here
  let nWays = 0;
  let sum = 0;

  for (let i = 0; i <= s.length-m; i++) {
    for (let j = i; j < i+m; j++) {
      sum += s[j];
    }
    
    if (sum === d) nWays++;
    
    sum = 0; // reset sum
  }

  return nWays;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const d = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + '\n');

  ws.end();
} */