// alert("hello guys!");

// document.write("Hello World");

// console.log("Hello World");

//variables declarations (var, let, const)
var name = "Manoj";
let age = 22;
const country = "India";

console.log(name, age, country);

//var ->  redeclaration
var x = 10;
var x = 20;
console.log(x); //20

//let -> no redeclaration
let y = 10;
//let y=20; //SyntaxError: Identifier 'y' has already been declared
y = 20;
console.log(y); //20

//const -> no redeclaration
const z = 10;
//const z=20; //SyntaxError: Identifier 'z' has already been declared
//z=20; //TypeError: Assignment to constant variable.
console.log(z);

//scope difference
function isVar() {
  if (true) {
    var a = "I am var ";
  }
  console.log(a);
}
function isLet() {
  if (true) {
    let b = "I am let";
    console.log(b);
  }
  // console.log(b);      //ReferenceError: b is not defined
}
isVar();
isLet();

//string
let name2 = "Manoj";
console.log(typeof name2); // string

//number
let num = 10;
console.log(typeof num); // number

//null
let Manoj = null;
console.log(typeof Manoj); // object -> this is a known bug in JavaScript and has been there forever.

//undefined
let Manoj2;
console.log(typeof Manoj2); // undefined

//Operators

//Arithmetic operators
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000

//Assignment operators
let c = 10;
c += 5; // c = c + 5
console.log(c); // 15

//Comparison operators
let d = 10,
  e = 20;
console.log(d == e); // false

//Logical operators
let f = true,
  g = false;
console.log(f && g); // false
console.log(f || g); // true
console.log(!f); // false

//Ternary operator
let age1 = 18;
let result = age1 >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

//Conditional Statements in JavaScript
//if
if (true) {
  console.log("true");
}

//if-else
if (false) {
  console.log("true");
} else {
  console.log("false");
}

//if-else-if
if (false) {
  console.log("true");
} else if (false) {
  console.log("false");
} else {
  console.log("false");
}

//switch
switch (10) {
  case 10:
    console.log("10");
    break;
  default:
    console.log("default");
}

//for loop
for (let i = 0; i < 5; i++) {
  console.log(i); //0-4
}

//while loop
while (true) {
  console.log("true");
  break; //to stop the loop
}

//do-while loop
do {
  console.log("true");
  break;
} while (true); //infinite loop

//for...of Loop
let word = "Hi";
for (let char of word) {
  console.log(char); // H, i
}

//string
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit); // apple, banana, mango
}

//for...in Loop
let person = {
  name: "Manoj",
  age: 21,
  city: "Jaipur",
};

for (let key in person) {
  // key -> name, age, city
  console.log(key + ":", person[key]); // name: Manoj, age: 21, city: Jaipur
}

//Print all even numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Functions
