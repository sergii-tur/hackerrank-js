/*
W04_07_Minimum_Absolute_Difference_in_an_Array.js

The absolute difference is the positive difference between two values a and b, 
is written |a - b| or |b - a| and they are equal. If a = 3 and b = 2, |3 - 2| = |2 - 3| = 1. 
Given an array of integers, find the minimum absolute difference between any two elements in the array. 

Example
arr = [-2, 2, 4]

There are 3 pairs of numbers: [-2, 2], [-2, 4] and [2, 4]. The absolute differences for these pairs are 
|(-2) - 2| = 4, |(-2) - 4| = 6 and |2 - 4| = 2. The minimum absolute difference is 2.

Function Description
Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.
minimumAbsoluteDifference has the following parameter(s): 
int arr[n]: an array of integers

Returns
int: the minimum absolute difference found

Input Format
The first line contains a single integer n, the size of arr.
The second line contains n space-separated integers, arr[i].

Constraints
2 <= n <= 10^5
-10^9 <= arr[i] <= 10^9

*/

'use strict';

const fs = require('fs');

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
}

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
  // Write your code here

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
