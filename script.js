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
function greet(name) {
  console.log("Hello " + name);
}
greet("Manoj");

//Function Expression
const greet2 = function (a, b) {
  return a + b;
};
console.log(greet2(10, 20));

//Arrow Function
const greet3 = (a, b) => a * b;
console.log(greet3(10, 2));

//single parameter
const greet4 = (x) => x * x;
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
fruits1.splice(1, 1, "Apple");
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
numbers.forEach((num) => {
  console.log(num * 2);
});

//.map() -> Returns a new array by applying a function to each element.
let number2 = [1, 2, 3, 4, 5];
let newNumber2 = number2.map((number2) => {
  console.log(number2 * number2); // [1,4,9,16,25]
  return number2 * 2;
});

//.filter() -> Returns a new array containing elements that satisfy a condition.
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers); // [2,4]

//.reduce() -> Returns a single value by applying a function cumulatively.
let max = [5, 2, 9, 1].reduce((a, b) => (a > b ? a : b));
console.log(max); // 9

//.find() -> Returns the first element that satisfies a condition.
let users = [
  { name: "Manoj", age: 21 },
  { name: "Tarun", age: 19 },
];

let user = users.find((user) => user.age === 19);
console.log(user); // { name: 'Tarun', age: 19 }

//.some() -> Returns true if at least one element satisfies a condition.
let hasEven = numbers.some((num) => num % 2 == 0);
console.log(hasEven); // true

//.every() -> Returns true if all elements satisfy a condition.
let allEven = numbers.every((num) => num % 2 == 0);
console.log(allEven); // false

//.findIndex() -> Returns the index of the first element that satisfies a condition.
let index = users.findIndex((user) => user.age === 19);
console.log(index); // 1

//.includes() -> Returns true if an array contains a specific value.
console.log(numbers.includes(3)); // true

//Objects in JavaScript ->collection of  key value pair. It allows you to store  multiple pieces if related data in one place.
let person1 = {
  name: "manoj",
  age: 21,
  isStudent: true,
};
console.log((person1.name = "ok")); // we can modifying object properties
console.log((person1.age = 22));
console.log(person1.isStudent);
console.log(person1);

//adding new properties
person1.city = "jaipur";
console.log(person1);

//deleting properties
delete person1.isStudent;
console.log(person1);

//checking if property Exists
console.log("name" in person); // true

//Looping through object
// for ...in loop
for (let key in person1) {
  console.log(key + ":" + person1[key]);
}

//Nested objects
let user1 = {
  name: "Manoj",
  age: 21,
  isStudent: true,
  address: {
    city: "jaipur",
    state: "Rajasthan",
  },
};
console.log(user1.address.city);

//object methods (function inside object)
let student = {
  name: "Manoj",
  age: 21,
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};
student.greet(); // Hello , I am Manoj

//using object methods

//return array of string
let keys = Object.keys(person1);
console.log(keys);
//return array of values
let value = Object.values(person1);
console.log(value);
//return array of entries
let entries = Object.entries(person1);
console.log(entries);

//Destructuring (array 7 objects) -> Extract values from arrays or objects.
// -> that allows you to unpack values from arrays or objects into individual variables — clean and readable!

//destructuring array
let numbers2 = [10, 20, 20];
let [j, h, i] = numbers2;
console.log(j);
console.log(h);
console.log(i);

//skipping elements
let [first, , third] = [1, 2, 3];
console.log(first); //1
console.log(third); //3

//object Destructuring -> extract values from an object using keys
let user2 = {
  name3: "Manoj",
  age3: 21,
};
let { name3, age3 } = user2;
console.log(name3);
console.log(age3);

//renaming variables
let { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//nested Destructuring
let person2 = {
  name: "manoj",
  age: 21,
  address: {
    city: "jaipur",
    state: "Rajasthan",
  },
};
let {
  address: { city, zip },
} = person2;
console.log(city); //jaipur
console.log(zip); //undefined

//desstructuring in function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
let userInfo = { name: "manoj", age: 21 };
printUser(userInfo);

//Benefits of Destructuring
//✅ Cleaner Code
//✅ More readable
//✅ Easy access to deep data (especially in APIs)

//Spread and Rest Operators(...)
//Spread Operator -> to expand or unpack values
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); //1,2,3,4,5,6

// copying array
let original = [10, 20];
let copy = [...original];
copy.push(30);
console.log(original); //10,20
console.log(copy); //10,20,30

//spreading object
let person3 = { name: "manoj", age: 21 };
let person4 = { ...person3, city: "jaipur" };
console.log(person4); // {name:"manoj",age:21,city:"jaipur"}

//spread in function arguments
function sum(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//Rest -> to collect remaining values

let [first1, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first1); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//rest in objects
let { name5, ...other } = {
  name: "manoj",
  age: 21,
  city: "jaipur",
};
console.log(name5); // name
console.log(other); // {age:21,city:"jaipur"}

//Rest in function
function multiplyAll(...nums) {
  return nums.reduce((acc, num) => acc * num);
}
console.log(multiplyAll(1, 2, 3)); // 6

// Scope and Closures -> Understanding where variables live (scope) and how functions remember their environment (closures) is key to mastering JavaScript.

//what is scope -> scope defines where a variable can be accessed.

// Global Scope--> Declared outside any function – accessible anywhere.
let name4 = "Manoj";

function greet() {
  console.log(name4); // Accessible
}

greet(); // Manoj

//Function Scope -->Declared inside a function – only accessible inside it.
function greet() {
  let age = 21;
  console.log(age); // 21
}
greet();
// console.log(age); // Error: age is not defined

//block scope -> declared inside a block {} (e.g., if statement or loop) – only accessible within that block.
if (true) {
  let message = "hello!";
  console.log(message); //hello!
}
//console.log(message); // Error: message is not defined

// Closures -> A function that has access to the variables in its own scope, the scope of the outer function, and the global scope.
// this is super powerful for private variables, async handling and much more.

//private variables using closure
function createSecret(secret) {
  return function () {
    console.log("Secret jaan na he ? ", secret);
  };
}
let getsecret = createSecret("Aachiya");
getsecret(); // Secret jaan na he ? Aachiya

// Closure with Loops fix using let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i is ", i);
  }, i * 1000);
}
// why are closures Useful ?
//-> Data privacy
//-> Async programming
//-> Event handling
// -> Memoization/caching

//Hoisting & Temporal Dead Zone (TDZ)

//Hoisting -> Hoisting is the process of moving variable declarations to the top of their containing scope.
//Only declarations are hoisted, not initializations.

//function hoisting
greet5(); // hello this is hoisting
function greet5() {
  console.log("hello this is hoisting");
}

//function expression are NOT Hoisted
//sayHi(); // Error : sayHi is not a function
var sayHi = function () {
  console.log("Hi");
};

// Temporal Dead Zone (TDZ) -> A time period during which a variable is not accessible.
//console.log(a2); // ReferenceError: a2 is not defined
//let a2 = 10;

//var -> function scope
//let -> block scope
//const -> block scope

//<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
//Intermediate  Javascript -> 

//Callbacks, Promises & async/await
