// Step 1: Create an array called 'students' with three objects representing student information.
// Each student object should have properties: 'name', 'age', and 'grade'.
const students = [
    {
        name: 'Cesar Francisco',
        age: 28,
        grade: 87
    },
    {
        name: 'Kathleen Ann Garcia',
        age: 28,
        grade: 86
    },
    {
        name: 'Luan Akio Francisco',
        age: 18,
        grade: 95
    }
];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log('2nd Student Name: ', students[1].name);

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.
students.push({
    name: 'Pedro Penduko',
    age: 19,
    grade: 79
});

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
for(let i = 0; i < students.length; i++){
    console.log(`Student Name: ${students[i].name}, Grade: ${students[i].grade} `);
}

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
const book = {
    title: 'Hello World',
    author: 'Juan Tamad',
    year: 1995
}

// Step 6: Access the title of the 'book' object and log it to the console.
console.log(`Book Title: ${book.title}`);

// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = 1930;
// console.log(`Book Year: ${book.year}`);

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.
book.getSummary = function(){
    let bookInfo = `Book Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    
    return bookInfo;
};

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log(book.getSummary());

// Step 10: Create an array called 'library' and add the 'book' object to it.
const library = [];
library.push(book);

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log('Library: ', library);

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
const car = {
    brand: 'Toyoto',
    model: 'Fortuner',
    year: 1920
};

// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log(`Car Model: ${car.model}`);

// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = 2023;
// console.log(`Car Year: ${car.year}`);

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.
car.startEngine = function(){
    console.log("Car's Engine is Starting!!!")
};

// Step 16: Call the 'startEngine' method of the 'car' object.
car.startEngine();

// Step 17: Create an array called 'garage' and add the 'car' object to it.
const garage = [];
garage.push(car);

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log('Garage: ', garage);

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
const person = {
    name: 'Jose Rizal',
    age: 33,
    city: 'Laguna'
};

// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log(`Age: ${person.age}`);

// Feel free to add more steps or customize the activity according to your needs.

