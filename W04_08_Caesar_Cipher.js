/*  

Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. If the shift takes you 
past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

Example 
s = There's-a-starman-waiting-in-the-sky
k = 3

The alphabet is rotated by 3, matching the mapping above. The encrypted string is
Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted. 

Function Description

Complete the caesarCipher function in the editor below.
caesarCipher has the following parameter(s):
string s: cleartext
int k: the alphabet rotation factor

Returns
string: the encrypted string 

Input Format
The first line contains the integer, n, the length of the unencrypted string.
The second line contains the unencrypted string, s.
The third line contains k, the number of letters to rotate the alphabet by.

Constraints
1 <= n <= 100
0 <= k <= 100
s is a valid ASCII string without any spaces. 

Sample Input
11
middle-Outz
2

Sample Output
okffng-Qwvb

Explanation
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
...

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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

let s = "There's-a-starman-waiting-in-the-sky";
let k = 26;

s = "Always-Look-on-the-Bright-Side-of-Life";
k = 100;

console.log(caesarCipher(s, k));

function caesarCipher(s, k) {
  // Write your code here
  let cipher = '';
  let charCode = 0;
  let kOver = 0;
  
  console.log(s);
  
  if (k === 0 || k === 26) return s;
  if (k > 26) k = k % 26; 
  
  for (let i = 0; i < s.length; i++) {
    charCode = s.charCodeAt(i);

    // Lower Case from 97 to 122
    if (charCode >= 97 && charCode <= 122) {
      if ( (charCode + k) > 122) {
        kOver = (charCode + k) - 122 - 1;
        cipher += String.fromCharCode(97 + kOver);
        //console.log( String.fromCharCode(charCode) + " -> " + String.fromCharCode(97 + kOver) + " lowercase overflow");
      } else {
        //console.log( String.fromCharCode(charCode) + " -> " + String.fromCharCode(charCode + k) );
        cipher += String.fromCharCode(charCode + k);
      }
    }
    // Upper Case from 65 to 90
    else if (charCode >= 65 && charCode <= 90) {
      if ( (charCode + k) > 90) {
        kOver = (charCode +  k) - 90 - 1;
        cipher += String.fromCharCode(65 + kOver);
        //console.log( String.fromCharCode(charCode) + " -> " + String.fromCharCode(65 + kOver) + " uppercase overflow");
      } else {
        //console.log( String.fromCharCode(charCode) + " -> " + String.fromCharCode(charCode + k) );
        cipher += String.fromCharCode(charCode + k);
      }
    }
    else {
      cipher += s[i];
    }
  }

  return cipher;
}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + '\n');

  ws.end();
} */
