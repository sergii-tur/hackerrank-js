/* 
W04_01_Picking_Numbers.js

Given an array of integers, find the longest subarray (subsequence) where the absolute difference 
between any two elements is less than or equal to 1. 

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5].
The maximum length subarray has 5 elements.

Function Description
Complete the pickingNumbers function in the editor below.
pickingNumbers has the following parameter(s): 
int a[n]: an array of integers

Returns
int: the length of the longest subarray that meets the criterion

Input Format
The first line contains a single integer n, the size of the array a.
The second line contains n space-separated integers, each an a[i].

Constraints
2 <= n <= 100
0 < a[i] < 100
The answer will be >= 2.

Input
6
4 6 5 3 3 1

Subarray
4 _ _ 3 3 _

Output
3


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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
a = [4, 6, 5, 3, 3, 1];
a = [4, 6, 5, 3, 3, 2, 1];
console.log( pickingNumbers(a) );

function pickingNumbers(a) {
  // Write your code here
  let elems = 0;
  let tempEl = 1;
  let key = 0;
  let start = 0;
  let end = a.length-1;
  let output = '';

  console.log(a);
  
  for (let i = 0; i < a.length; i++) {
    for (let p = start; p < a.length; p++) {
      output += a[p] + " ";
      if (p === start) {
        key = a[p];
      } else {
        if ( Math.abs(key - a[p]) <= 1) {
          tempEl++;
          key = a[p];
        }
      }
    }
    output = '';
    start++;
    if (tempEl > elems) elems = tempEl;
    tempEl = 1;

    for (let q = end; q >= 0; q--) {
      output += a[q] + " ";
      if (q === end) {
        key = a[q];
      } else {
        if ( Math.abs(key - a[q]) <= 1) {
          tempEl++;
          key = a[q];
        }
      }
    }
    output = '';
    end--;
    if (tempEl > elems) elems = tempEl;
    tempEl = 1;
  }

  return elems;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
} */