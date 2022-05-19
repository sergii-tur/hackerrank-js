/*  
W02_03_Flipping_bits.js

You will be given a list of 32 bit unsigned integers. Flip all the bits 
(0 -> 1 and 1 -> 0) and return the result as an unsigned integer. 

Example
n = 9(10)
9(10) = 1001(2). We're working with 32 bits, so:
00000000000000000000000000001001(2) = 9(10)
11111111111111111111111111110110(2) = 4294967286(10)
Return 4294967286.

Function Description
Complete the flippingBits function in the editor below.
flippingBits has the following parameter(s):
int n: an integer

Returns
int: the unsigned decimal integer result

Input Format
The first line of the input contains q, the number of queries.
Each of the next q lines contain an integer, n, to process. 

Constraints
1 <= 1 <= 100
0 <= n <= 2^32

Sample Input
3 
2147483647 
1 
0

Sample Output
2147483648 
4294967294 
4294967295

Explanation
Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 
and doing the flipping we get 11111111111111111111111111111110 which in turn is 
4294967294.

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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */
flippingBits(2147483647);

function flippingBits(n) {
  // Write your code here
  // Constraints
  if ( n < 0 || n > Math.pow(2, 32) ) return 0;
  
  return (~n) >>> 0;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = flippingBits(n);

    ws.write(result + '\n');
  }

  ws.end();
} */