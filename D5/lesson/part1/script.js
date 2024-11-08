//Variables
// let name = 'Cesar';
// name = 'Ces';

const temp = 100;

//Outputting Variables
// console.log('name :>> ', name);
// console.log('temp :>> ', temp);

//Basic Syntax
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log('sum :>> ', sum);

//Primitive types: These are the most basic data types in JavaScript:
/*
Number: Represents numeric values. For example, 5, 3.14, -10.

String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.

Boolean: Represents either true or false (logical values).
*/

//rimitive data types
let name = 'Cesar'; //string
let age = 25;   //number
let isStudent = true; //boolean
let car = null; //null
let city = undefined; //undefined

//Outputting data types
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of city:", typeof city);

let x = 5;
let y = 2;

let sum = x + y;
console.log('Sum:', sum);

let difference = x - y;
console.log("Difference:", difference);

let product = x * y;
console.log("Product:", product);

let quotient = x / y;
console.log("Quotient:", quotient);

let remainder = x % y;
console.log("Remainder:", remainder);

let a = 10;
let b = 5;

a += b;
console.log('a:', a);

a -= b;
console.log('a:', a);

a *= b;
console.log("a:", a);

a /= b;
console.log("a:", a);

/*
a = 10
a = 10 * 5
a = 50 // new value

a = 50
a = 50 / 5
a = 10 // new value
*/

//comparison operator
let p = 3;
let q = 6;
console.log('p > q:', p > q);
console.log('p < q:', p < q);
console.log('p >= q:', p >= q);
console.log('p <= q:', p <= q);
console.log('p === q:', p === q);
console.log('p == q:', p == q);
console.log("p !== q:", p !== q);

//logical operators
let sunny = true;
let warm = false;

console.log('true and false:', sunny && warm);
console.log('true and true:', sunny && sunny);
console.log('true or false:', sunny || warm);
console.log('Not True:', !sunny);

