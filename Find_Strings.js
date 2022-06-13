let w = ["abc", "cde"]; // 1, 5, 20 -> a bc INVALID
w = ["aab", "aac"]; // 3, 8, 23 -> aab c INVALID 
//w = ["abc", "cd"]; //
//w = ["abba", "daddy", "mommy"];
//w = ["abcdefg"];
console.table(w);

console.table(findStrings(w, [3, 8, 23]));

function findStrings(w, queries) {
  // Write your code here
  let s = [];

  for (let a = 0;  a < w.length; a++) {
    let string = w[a];

    for (let i = 0; i < string.length; i++) {
      let tempString = '';
      
      for (let j = i; j < string.length; j++) {
        s.push(tempString += string[j]);
      }
      
    }
  }

  let set = new Set(s);
  let arrUnion = [];
  
  for(let element of set) {    
    arrUnion.push(element); 
  }
  
  arrUnion.sort();
  console.table(arrUnion);
  console.table(queries);

  let output = [];
  
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] > arrUnion.length) {
      output.push("INVALID");
    } else {
      //console.log(queries[i]-1);
      output.push(arrUnion[queries[i]-1]);
    }
  }
  //console.table(output);
  return output;
}