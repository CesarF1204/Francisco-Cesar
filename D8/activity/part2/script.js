// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const squareRoot = (num) => {
    return num * num;
}
console.log('Square Root: ', squareRoot(3));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const person = {
    first_name: 'Cesar',
    last_name: 'Francisco',
    age: 28,
    gender: 'male'
}
const full_name = person.first_name+' '+person.last_name;
console.log(`Happy Birthday ${full_name}! You're now ${person.age} years old.`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const { first_name, last_name, age, gender } = person;

// Task 4: Use the spread operator to merge two arrays into a single array.
const arr1 = [5,6,3,1];
const arr2 = [10,99,22,33,55];
const merge_array = [...arr1, ...arr2];
console.log('Merge Array: ', merge_array);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const area = (length = 1, width = 1) => {
    return length * width;
}
console.log('Default Area: ', area());
console.log('Area: ', area(5, 7));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = () => {
        console.log(`Hello! Nice to meet you. My name is ${this.name} and I am now ${this.age} years old.`);
    }
}

const human = new Person('Kathleen',  28);

human.introduce();