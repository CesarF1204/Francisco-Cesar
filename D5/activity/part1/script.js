let score = parseInt(prompt("Enter a score: "));

if(score > 100 || score < 0 || isNaN(score)){
    console.log('Invalid Score. Please try again!');
}
else{
    if(score >= 90){
        console.log('Grade A');
    }
    else if(score >= 80 && score <= 89){
        console.log('Grade B');
    }
    else if(score >= 70 && score <= 79){
        console.log('Grade C');
    }
    else if(score >= 60 && score <= 69){
        console.log('Grade D');
    }
    else{
        console.log('Grade F');
    }
}

