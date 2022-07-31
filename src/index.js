//var example
var addition;
function add(a, b) {
  var addition = a + b;
  addition = 7;
  console.log(addition);
}
add(2, 3);
console.log(addition);

//let example
function sub(a, b) {
  let subtraction = a - b;
  subtraction = 10; //over write a-b
  console.log(subtraction);
}
sub(7, 5);

// console.log(subtraction); //throws error

// const example

function mul(a, b) {
  const multiplication = a * b;
  // multiplication = 10; // gives error
  console.log(multiplication);
}
mul(2, 4);

//map
const arr = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];

arr.map((i) => {
  console.log(i);
});
