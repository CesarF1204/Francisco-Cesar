// Arrow Functions
// Transforming a function to an arrow function
function square(num){
    return num * num
}

const squareArrow = (num) => {
    return num * num
}

// shorter version
const squareArrowShorter = (num) => num * num;

const multiply = (a, b) => a * b;
console.log('multiply(5, 7) :>> ', multiply(5, 7));

// Template Literals
const name = 'Alice';
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`)

/*
Destructuring - Extract Values from Arrays and Objects
Destructuring allows you to quickly unpack values from arrays or objects into separate variables, making it easier to work with complex data structures.
*/
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log('first :>> ', first);
console.log('second :>> ', second);
console.log('rest :>> ', rest);

const person = { name: 'Bob', age2: 30, country: 'USA' };
const {name: personName, age2, country} = person;
console.log('country :>> ', country);
console.log('age2 :>> ', age2);
console.log('personName :>> ', personName);

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('combinedArray :>> ', combinedArray);

// Default Parameters - Set Default Values for Function Arguments
const calculatedArea = (length = 1, width = 1) => {
    return length * width;
}

console.log('calculatedArea No Values :>> ', calculatedArea());
console.log('calculatedArea :>> ', calculatedArea(3, 4));
