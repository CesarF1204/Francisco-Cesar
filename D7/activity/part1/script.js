/* Get the form element with the id 'loanCalculatorForm' */
const loan_calculator = document.getElementById('loanCalculatorForm');
/* Add an event listener for the 'submit' event on the loan calculator form
   When the form is submitted, the handleSubmit function will be triggered */
loan_calculator.addEventListener('submit', handleSubmit);

/**
* DOCU: This function is used to fetch the chapter survey answers data. <br>
* This is being called from handleSubmit function. <br>
* Triggered: When user clicks the calculate button.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @param {number} amount_value - The principal amount.
* @param {number} interest_value - The interest rate.
* @param {number} term_value - The term duration.
* @author Cesar
*/
function calculateMonthlyPayment(amount_value, interest_value, term_value){
    /* 12 - months per year */
    let months = 12;

    /* calculation of interest rate per month */
    const monthly_interest_rate = (interest_value / 100) / months;
    /* calculation of number of payments */
    const number_of_payment = term_value * months;
    
    /* calculation of monthly payment */
    const calculate_monthly_payment = (amount_value * monthly_interest_rate * Math.pow(1 + monthly_interest_rate, number_of_payment)) / (Math.pow(1 + monthly_interest_rate, number_of_payment) - 1);

    return calculate_monthly_payment.toFixed(2);
}

/**
* DOCU: This function is used to handle the submission of the form for loan calculation. <br>
* This is being called when user clicks the calculate button. <br>
* Triggered: When user clicks the calculate button.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function handleSubmit(event){
    event.preventDefault();

    /* Get references to the input elements for amount, interest, and term */
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const term = document.getElementById('term');

    /* Retrieve the values from the input fields */
    const amount_value = amount.value;
    const interest_value = interest.value;
    const term_value = term.value;

    /* Calculate the monthly payment using the provided values */
    const calculated_monthly_payment = calculateMonthlyPayment(amount_value, interest_value, term_value);

    /* Check if the calculated monthly payment is invalid (NaN or negative) */
    if(isNaN(calculated_monthly_payment) || calculated_monthly_payment < 0){
        alert('The computed amount is invalid. Please try again!')
    }
    else{
        /* Create an <h2> element to display the calculated monthly payment */
        const calculated_payment_text = document.createElement('h2');
        calculated_payment_text.textContent = '₱' + calculated_monthly_payment;
        
        /* Get the element where the result will be displayed and clear any previous result */
        const calculated_payment_container = document.getElementById('calculated_payment_container');
        calculated_payment_container.innerHTML = '';

        /* Append the new calculated monthly payment to the display element */
        calculated_payment_container.appendChild(calculated_payment_text);
    }

    /* Clear the amount, interest, and term input fields */
    amount.value = '';
    interest.value = '';
    term.value = '';
}