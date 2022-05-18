/*  
W02_02_Grading_Students.js

HackerLand University has the following grading policy:
Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade. 

Sam is a professor at the university and likes to round each student's grade 
according to these rules:
If the difference between the grade and the next multiple of 5 is less than 3,
round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will 
still be a failing grade. 

Examples
grade = 84 round to 85 (85 - 84 is less than 3)
grade = 29 do not round (result is less than 40)
grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grade for each of Sam's n students, 
write code to automate the rounding process. 

Function Description
Complete the function gradingStudents in the editor below.
gradingStudents has the following parameter(s): 
int grades[n]: the grades before rounding

Returns
int[n]: the grades after rounding as appropriate

Input Format
The first line contains a single integer, n, the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].

Constraints
1 <= n <= 60
0 <= grades[i] <= 100

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
