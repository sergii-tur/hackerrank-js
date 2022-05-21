/*
W02_07_Pangrams.js

A pangram is a string that contains every letter of the alphabet. 
Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. 
Return either pangram or not pangram as appropriate.

Example
s = 'The quick brown fox jumps over lazy dog'
The string contains all letters in the English alphabet, so return pangram.

Function Description
Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. 
Otherwise, it should return not pangram.
pangrams has the following parameter(s):
string s: a string to test

Returns
string: either pangram or not pangram

Input Format
A single line with string s.

Constraints
0 < length of s <= 10^3
Each character of s, s[i] is el. of {a - z, A - Z, space}

Sample Input
Sample Input 0
We promptly judged antique ivory buckles for the next prize

Sample Output 0
pangram

Sample Explanation 0
All of the letters of the alphabet are present in the string.

Sample Input 1
We promptly judged antique ivory buckles for the prize

Sample Output 1
not pangram

Sample Explanation 0
The string lacks an x. 

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
let s = 'The quick brown fox jumps over lazy dog';
console.log( pangrams(s) );
//pangrams(s);
function pangrams(s) {
  // Write your code here
  // Solution without using RegEx
  s = s.toLowerCase();
  let result = 'pangram';

  for (let i = 97; i <= 122; i++) {
    if( !s.includes(String.fromCharCode(i)) ) {
      result = 'not pangram';
      break;
    }
  }
  return result;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = pangrams(s);

  ws.write(result + '\n');

  ws.end();
} */