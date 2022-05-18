/*
W02_08_Mars_Exploration.js

A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help. 
Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.

Example
s = 'SOSTOT'
The original message was SOSSOS. Two of the message's characters were changed in transit. 

Function Description
Complete the marsExploration function in the editor below.
marsExploration has the following parameter(s):
string s: the string as received on Earth

Returns
int: the number of letters changed during transmission

Input Format
There is one line of input: a single string, s. 

Constraints
1 <= length of s <= 99
length of s modulo 3 = 0
s will contain only uppercase English letters, ascii[A-Z].

Explanation
Sample 0
S = SOSSPSSQSSOR, and signal length |S| = 12. Sami sent 4 SOS messages (i.e.: 12/3 = 4).

Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR
We print the number of changed letters, which is 3.

Sample 1
S = SOSSOT, and signal length |S| = 6. Sami sent 2 SOS messages (i.e.: 6/3 = 2).
Expected Signal: SOSSOS
Received Signal: SOSSOT
We print the number of changed letters, which is 1.

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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  // Write your code here

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = marsExploration(s);

  ws.write(result + '\n');

  ws.end();
}