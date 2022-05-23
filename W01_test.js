
let arr = [];
for (let i = 0; i < random(); i++) {
  arr.push( random() );
}
//arr = [1,2,3];
console.log( findMedian(arr) );

function findMedian(arr) {
  let arrSorted = arr.sort(function(a, b) {
    return a - b;
  });
  let size = arrSorted.length;
  if (size < 2) return 0;

  console.table(arrSorted);
  
  let median = 0;
  if (size % 2 === 0) {
    let mid = Math.floor(size/2);
    median = (arrSorted[mid] + arrSorted[mid+1]) / 2;
  } else {
    median = arrSorted[Math.floor(size/2)];
    if (size === 2) median = (arrSorted[0] + arrSorted[1]) / 2;
  } 
  console.log("n = " + size + " , median: " + median);
  
  return median;
}

function random() {
  return Math.floor(Math.random() * 1000);
}