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

//Functions in JavaScript -> Functions are blocks of reusable code. They help avoid repetition, make your code modular, and easier to maintain.

//Function Declaration
function greet(name){
    console.log("Hello " + name);
}
greet("Manoj");

//Function Expression
const greet2= function(a,b){
    return a+b;
}
console.log(greet2(10,20));

//Arrow Function
const greet3=(a,b)=> a*b;
console.log(greet3(10,2));

//single parameter
const greet4=x=>x*x;
console.log(greet4(10));

//Arrays in JavaScript --> Arrays are ordered collections used to store multiple values in a single variable.

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1); // [ 'Apple', 'Banana', 'Mango' ]

//Examples of Common Methods: 
//Adding elements
fruits1.push("Grapes");
console.log(fruits1); // [ 'Apple', 'Banana', 'Mango', 'Grapes' ]

//Removing elements
fruits1.pop();
console.log(fruits1); // [ 'Apple', 'Banana', 'Mango' ]

//Removing from start
fruits1.shift();
console.log(fruits1); // [ 'Banana', 'Mango' ]

//Adding from start
fruits1.unshift("Grapes");
console.log(fruits1); // [ 'Grapes', 'Banana', 'Mango' ]

//Adding at specific position
fruits1.splice(1,1,"Apple");
console.log(fruits1); // [ 'Grapes', 'Apple', 'Mango' ]

//Sorting
fruits1.sort();
console.log(fruits1); // [ 'Apple', 'Grapes', 'Mango' ]

//Reversing
fruits1.reverse();
console.log(fruits1); // [ 'Mango', 'Grapes', 'Apple' ]

//Checking for an element
console.log(fruits1.includes("Apple")); // true


//Array Higher Order Methods (map, filter, reduce, etc.)

// .forEach() -> Iterates over each element and applies a function.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num=>{
  console.log(num*2);
})

//.map() -> Returns a new array by applying a function to each element.
let number2=[1,2,3,4,5];
let newNumber2=number2.map(number2=>{
  console.log(number2*number2); // [1,4,9,16,25]
  return number2*2;
})

//.filter() -> Returns a new array containing elements that satisfy a condition.
let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers); // [2,4]

//.reduce() -> Returns a single value by applying a function cumulatively.
let max = [5, 2, 9, 1].reduce((a, b) => a > b ? a : b);
console.log(max); // 9

//.find() -> Returns the first element that satisfies a condition.
let users = [
  { name: "Manoj", age: 21 },
  { name: "Tarun", age: 19 }
];

let user = users.find(user => user.age === 19);
console.log(user); // { name: 'Tarun', age: 19 }

//.some() -> Returns true if at least one element satisfies a condition.
let hasEven = numbers.some(num => num % 2 == 0);
console.log(hasEven); // true

//.every() -> Returns true if all elements satisfy a condition.
let allEven = numbers.every(num => num % 2 == 0);
console.log(allEven); // false

//.findIndex() -> Returns the index of the first element that satisfies a condition.
let index = users.findIndex(user => user.age === 19);
console.log(index); // 1

//.includes() -> Returns true if an array contains a specific value.
console.log(numbers.includes(3)); // true

    