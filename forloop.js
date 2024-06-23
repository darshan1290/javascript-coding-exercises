// const arr = [1,3,2,2,1,9,4,1,6,5,90];

// const output = [... new Set(arr)];
// //console.log(output);

// const countArray = arr.reduce((prev,current) => {
//     prev[current] = (prev[current] || 0) + 1;
//     return prev;
// },{});

//console.log(countArray);

const clumsysquare = (num1, num2)  => {
  for(let i=1; i<=100000; i++) {}

  return num1 * num2;
}

console.time("First Call");
console.log(clumsysquare(1231,6234));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsysquare(1231,6234));
console.timeEnd("Second Call");