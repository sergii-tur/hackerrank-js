/* 
W1_05_Camel_Case_4.js

Camel Case is a naming style common in many programming languages. In Java, method 
and variable names typically start with a lowercase letter, with all subsequent words
starting with a capital letter (example: startThread). Names of classes follow the 
same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, 
and class names.

Input Format
- Each line of the input file will begin with an operation (S or C) followed by a 
semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
- The operation will either be S (split) or C (combine)
- M indicates method, C indicates class, and V indicates variable
- In the case of a split operation, the words will be a camel case method, class or 
variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
- In the case of a combine operation, the words will be a space-delimited list of 
words starting with lowercase letters that you need to combine into the appropriate camel case String. 
Methods should end with an empty set of parentheses to differentiate them from variable names.

Output Format
For each input line, your program should print either the space-delimited list of 
words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

Sample Input
S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

Sample Output
plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame

Explanation
- Use Scanner to read in all information as if it were coming from the keyboard.
- Print all information to the console using standard output (System.out.print() or System.out.println()).
- Outputs must be exact (exact spaces and casing).
*/
/* processData("S;M;plasticCup()"); // plastic cup
processData("C;V;mobile phone"); // mobilePhone
processData("C;C;coffee machine"); // CoffeeMachine
processData("S;C;LargeSoftwareBook"); // large software book
processData("C;M;white sheet of paper"); // whiteSheetOfPaper()
processData("S;V;pictureFrame"); // picture frame */

let inputStr = "S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter";
processData(inputStr);

function processData(input) {
  //Enter your code here
  // Exeptions
  if ( (input[0] !== 'S' && input[0] !== 'C') || 
       (input[1] !== ';' || input[3] !== ';') || 
       (input[2] !== 'M' && input[2] !== 'V' && input[2] !== 'C') ) {
        console.log("error: invalid input");
        return 0;
  }
  
  let rawInputArr = input.split("\r\n");

  for (command of rawInputArr) {
    let inputArr = command.split(";");
    let operation = inputArr[0];
    let type = inputArr[1];
    let name = inputArr[2];
    let upperPos = 0;
    let output = '';

    // split operation
    if (operation === 'S') {
      switch (type) {
        case 'M':
          name = name.slice(0, -2);
          break;
        case 'C':
          name = name.charAt(0).toLowerCase() + name.slice(1);
          break;
        case 'V':
          break;
        default:
          console.log("error: second parameter after semicolon must be M, C, or V");
          return 0;
      }
      
      for (let i = 0; i < name.length; i++) {
        if ( name[i] === name[i].toUpperCase() ) {
          output = output + name.slice(upperPos, i) + " "; 
          upperPos =+ i;
        }
        // last word
        if (i === name.length-1 ) output = output + name.slice(upperPos);
      }
      output = output.toLowerCase();
    }

    // combine operation
    if (operation === 'C') {
      
      let nameArr = name.split(' ');
      for (let i = 1; i < nameArr.length; i++) {
        nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
      }
      
      output = nameArr.join("");

      switch (type) {
        case 'M':
          output = output + "()";
          break;
        case 'C':
          output = output.charAt(0).toUpperCase() + output.slice(1);
          break;
        case 'V':
          break;
        default:
          console.log("error: second parameter after semicolon must be M, C, or V");
          return 0;
      }
    }

    console.log( output.trim() );
  }
} 

/* process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
}); */