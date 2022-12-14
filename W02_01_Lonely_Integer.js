/*  
W02_01_Lonely_Integer.js

Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4

Function Description
Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):
int a[n]: an array of integers

Returns
int: the element that occurs only once

Input Format
The first line contains a single integer, n, the number of integers in the array. 
The second line contains n space-separated integers that describe the values in a.

Constraints
1 <= n < 100
It is guaranteed that n is an odd number and that there is one unique element. 
0 <= a[i] <= 100, where 0 <= i < n.

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
}
 */
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

//let a = [1, 2, 3, 4, 3, 2, 1];
let a = [1, 3, 1, 4, 7, 4, 3];
let b = ["ab", "hello", "unique", "cool", "hello", "cool", "ab"];
console.log( lonelyinteger(a) );
console.log( lonelyintegerXOR(a) );
//lonelyinteger(a);
function lonelyinteger(a) {
  // Write your code here
  let size = a.length;
  if (size === 1) return a[0];
  
  let isLonely = false;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (j !== i) {
        if (a[i] === a[j]) {
          isLonely = false;
          break;
        } else {
          isLonely = true;
        }
      }
    }
    if (isLonely) return a[i];
  }
}
// Bitwise XORing any number x with 0 yields x
function lonelyintegerXOR(a) {
  let  result = 0;
  console.log("lonelyintegerXOR: ");
  for (let element of a) {
    console.log(result + " ^ " + element + " = " + (result^element) );
    result = result ^ element;
    
  }

  return result;
}
/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + '\n');

  ws.end();
} */
