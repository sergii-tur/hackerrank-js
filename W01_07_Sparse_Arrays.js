/* 
W01_07_Sparse_Arrays.js

There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results. 

Example
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']
There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'.
For each query, add an element to the return array, results = [2, 1, 0]

Function Description
Complete the function matchingStrings in the editor below. The function must return 
an array of integers representing the frequency of occurrence of each query string in strings.
matchingStrings has the following parameters:
- string strings[n] - an array of strings to search 
- string queries[q] - an array of query strings

Returns
- int[q]: an array of results for each query

Input Format
The first line contains and integer n, the size of strings[]
Each of the next n lines contains a string strings[i]
The next line contains q, the size of queries[]
Each of the next q lines contains a string queries[i]

Constraints
1 <= n <= 1000
1 <= q <= 1000
1 <= |strings[i]|, |queries[i]| <= 20

Sample Input 1
4
aba
baba
aba
xzxb
3
aba
xzxb
ab

Sample Output 1
2
1
0

Sample Input 2
3
def
de
fgh
3
de
lmn
fgh

Sample Output 2
1
0
1

Sample Input 3
13
abcde
sdaklfj
asdjf
na
basdn
sdaklfj
asdjf
na
asdjf
na
basdn
sdaklfj
asdjf
5
abcde
sdaklfj
asdjf
na
basdn

Sample Output 3
1
3
4
3
2

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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */
const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

console.log( matchingStrings(strings, queries) );

function matchingStrings(strings, queries) {
  // Write your code here
  // Constrains
  if (strings.length < 1 || strings.length > 1000) return 0;
  if (queries.length < 1 || queries.length > 1000) return 0;

  let results = [];
  let matches = 0;

  for (const query of queries) {
    // Constrains
    if (query.length < 1 || query.length > 20) return 0;
    
    for (const string of strings) {
      // Constrains
      if (string.length < 1 || string.length > 20) return 0;
      
      if (query === string) matches++;
    }
    
    results.push(matches);
    matches = 0;
  }

  return results;

}

/* function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const stringsCount = parseInt(readLine().trim(), 10);

  let strings = [];

  for (let i = 0; i < stringsCount; i++) {
    const stringsItem = readLine();
    strings.push(stringsItem);
  }

  const queriesCount = parseInt(readLine().trim(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }

  const res = matchingStrings(strings, queries);

  ws.write(res.join('\n') + '\n');

  ws.end();
} */