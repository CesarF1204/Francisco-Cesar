let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

let guessedNumber;

let playerName = prompt("Enter Player Name: ");
console.log('Welcome '+ playerName + '!');

do{
    guessedNumber =  parseInt(prompt("Enter Your Guess Number: "));
    attempts++;

    if(guessedNumber < secretNumber){
        console.log("Too low! Try again.");
    }
    else if(guessedNumber > secretNumber){
        console.log("Too high! Try again.");
    }
    else{
        console.log("Congratulations! You guessed the correct number: ", secretNumber);
        console.log(`It took you ${attempts} attempts.`);
    }
}
while(guessedNumber !== secretNumber)