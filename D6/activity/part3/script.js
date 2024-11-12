// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num){
    return num % 2 === 0;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for(let i = 0; i <= 10; i++){
    console.log(`Is Even By ${i}: ${isEven(i)}`)
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2){
    return num1 * num2;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
while(true){
    let first_number = parseFloat(prompt("Enter the first number:"));
    let second_number = parseFloat(prompt("Enter the second number:"));

    if(first_number < 0 || second_number < 0){
        console.log("The number you entered is a negative.");
        break;
    }
    else{
        let product = multiply(first_number, second_number);
        console.log(`Product: ${product}`);
    }
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(string){
    let reversedString = string.split('').reverse().join('');

    return reversedString;
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(`Reverse String: ${reverseString('hello')}`);

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(string){
    let vowels = 'aeiouAEIOU';
    let count = 0;

    let stringArray = string.split('');

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(stringArray[i])){
            count++;
        }
    }
    
    return count;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(`Count Vowels: ${countVowels('JavaScript')}`);

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(nums){
    return Math.max(...nums);
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(`Find Max: ${findMax([4, 9, 2, 7, 5])}`)

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    }

    return num * calculateFactorial(num - 1);
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(`Calculate Factorial: ${calculateFactorial(5)}`)

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(string){
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(`Is Palindrome: ${isPalindrome('level')}`);

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(nums){
    return nums.reduce((a, b) => a + b, 0)
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(`Sum Array: ${sumArray([1, 2, 3, 4, 5])}`);

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(`Capitalized First Letter: ${capitalizeFirstLetter('javascript')}`);

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(nums) {
    return nums.filter(num => num % 2 === 0);
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(`Filtered Numbers: ${filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);