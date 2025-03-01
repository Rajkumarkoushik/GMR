// Variables var, let and const

var x = 20; // declaration 
var x = 20; // re-declaration var accepts both re declaration and re assignment
let y = 30; // let accepts only re assignment, let does'nt accept re declaration.
y = 40; // re assignment
const z = 40; // const doesn't accept both re declaration and re assignment.

// comments for single line // for multiple lines /* */.

// keywords let, var , const, function, switch, if, return, try, for....JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

// outputs 
// console.log(x);
// document.getElementById("").innerHTML = x;
// document.write();
// window.alert();

// js casing pascal case :- CheckBankBalance, camel case checkBankBalance default js use camel case, underscore or snake case check_bank_balance.

// js operators assignment =+,=-,=*,=/,=**, arithmetic +,-,*,/,**,++,--, comparison ==,===,>,<,<=,=>,!=,!==, type typeof, ternary, bitwise, logical and,or,not, string.

// diff b/w == and === ....== compares only are equal or not, === will compares both the value and data types are equal or not.

// ternary operator
const age = 18;
const vote = (age > 17) ? "eligible" : "un-eligible"; // (age > 17) condition ? "eligible" expression one : "un-eligible" expression two;
console.log(vote);

// string operators
const s = "web";
const s2 = 30;
console.log(s - s2); // output will be NAN ...because if we try to perform any arithmetical operations in non numerical value it will show NAN.

// Data types string, number, boolean, undefined, null, bigint, symbol, object.
// Diff b/w undefined and null....undefined means a variable has been declared but not assigned a value, while null means a variable has been assigned a value of null.

const number = BigInt(237865472356624637627563725834934); // Date type bigint

// Data type object.....object, array object and date object
const obj = { name: "koushik", age: 26, designation: "developer", contact: 6302034467 };// object
const arr = ["web", "app", "aws", "dm", "developer"]; // array object
const date = new Date(); // Date object

// Functions ..... function is a block of code designed to perform a particular task. executed when "something" invokes it (calls it).
// Named functions 
function myFunction() {
    console.log("Hello world!");
    return //When JavaScript reaches a return statement, the function will stop executing
};
myFunction();
myFunction();
myFunction();// invoking

// Objects In real life, objects are things like: houses, cars, people, animals, or any other subjects.
const myObject = { name: "koushik", age: 26, designation: "developer", contact: 6302034467 };
myObject.name = "Rajkumar"; // Here changing the name value to "Rajkumar"
console.log(myObject.name);

// another way to creating a new object
const newObj = new Object();
newObj.name = "Rajkumar"; // another way to creating a new object

// Array....Using array we can store list of data items.
const array = [56, 56, 46, 14, 92, 42, 620, 241, 635];

// Array of objects

const arrObj = [
    { name: "koushik", age: 26, designation: "developer", contact: 6302034467 },
    { name: "Rajkumar", age: 25, designation: "Designer", contact: 6462154512 },
    { name: "Web", age: 27, designation: "professor", contact: 9712145445 },
    { name: "Developer", age: 28, designation: "Data analyst", contact: 9346595712 },
];

// Events....events are two types one is user events :- onclick, onmouseover, onmouseout, onkeyup, onkeydown, onchange and another one is browser events :- onload.
// Method one
const btn = document.querySelector("#button");
const img = document.querySelector(".img");

btn.addEventListener("click", function buttonClicked() { 
    img.classList.toggle("img-active");
});

// Method two
function buttonClicked() {
    img.classList.toggle("img-active");
};

// onchange event
const check = document.querySelector("#check");
check.addEventListener("change", function ChangeEvent() { 
    img.classList.toggle("img-active");
});

// Load event
window.addEventListener("load", function LoadEvent() { 
    img.classList.toggle("img-active");
});

// Primitive data types, number, string, boolean....etc :- 1. stores single value only. 2. Immutable. 3. When we compares any two primitive data types(value and data type are equal) it will give true as an output. and non primitive data types...object,array, date, function, 1. stores multiple value. 2. Mutable. 3. When we compares any two non primitive data types(value and data type are equal) it will give False as an output..

// Ex primitive data type
let a = 10;
let b = a; // Copy of 'a' is assigned
b = 20;
console.log(a); // 10 (original remains unchanged)
console.log(b); // 20

// Ex non primitive data type
let obj1 = { name: "Koushik" };
let obj2 = obj1; // Both point to the same memory location
obj2.name = "Rajkumar";
console.log(obj1.name); // "Rajkumar" (original object is modified)
console.log(obj2.name); // "Rajkumar"

// String extracting slice,substring and substr .......extract a part of string and return a new string.

// Slice
const slice = "web, app, dm, aws, developer";
const strings = slice.slice(3, 6);// slice have two values one is starting value and another is ending value. (-13, -5)
console.log(strings); 
// substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
// substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.





