//javascript 
let displayNum = 0;
let operator = "";

let numberArray = [];
let argumentsArray = [];
let result = 0;


// functions for basic math
function add(a,b){
    return Number(a) + Number(b);
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function addToNumberArray (number){ // adds number to an array for calculation 
    let length = numberArray.length;
    numberArray[length] = number;
    console.table(numberArray);
}

function addToArgumentsArray (args){ // adds arguments to an array for calculation 
    let length = argumentsArray.length;
    argumentsArray[length] = args;
    console.table(argumentsArray);
}

function operate() { // operates the equation given
    addToNumberArray(displayNum);
    displayNum = '0'; // Reset the display to '0'
    let a = 0
    
    for (; a < argumentsArray.length; a++) {
        const functionName = argumentsArray[a];
        const arg1 = numberArray[a]; // Use the current displayNum as the first argument
        const arg2 = numberArray[a + 1];
        numberArray[a + 1]= window[functionName](arg1, arg2);
    }
    displayNum = numberArray[a];
    
    // Clear the arrays after calculations
    argumentsArray = [];
    numberArray = [];
    result = 0; // resets the calculations for this function 
    updateDisplayNum(); // update the num to show on the calculator
}

function clickedButton(event){ // when numbers get clicked it will get added to the display number and stored when finished
    const buttonValue = event.target.id;
    displayNum = displayNum + buttonValue;
    if (displayNum.charAt(0) == 0){ // cannot have the calculator have the first number be 0
        displayNum = displayNum.slice(1);
    }
    updateDisplayNum();
}
 
function updateDisplayNum(){ // update the number on the calculator everytime something is being returned or pressed
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = displayNum;
}



function chooseOperator(op){ //chooses which operation you will do 
    addToArgumentsArray(op);
    addToNumberArray(displayNum);
    displayNum = 0;
    updateDisplayNum();
}

function clear (){ // resets all variables 
    displayNum = 0;
    updateDisplayNum();
    operator = '';
    argumentsArray = [];
    numberArray = [];
}


//adding event listners for all the number keys
const numbers = document.querySelectorAll('.num');
numbers.forEach(function (number) {
    number.addEventListener('click', clickedButton);
    number.addEventListener('click', updateDisplayNum);
});

// adding event listeners to all the operator buttons 
const mult = document.getElementById('X');
mult.addEventListener('click', () => {chooseOperator('multiply')});

const divi = document.getElementById('/');
divi.addEventListener('click', () => {chooseOperator('divide')});

const ad = document.getElementById('+');
ad.addEventListener('click', () => {chooseOperator('add')});

const sub = document.getElementById('-');
sub.addEventListener('click', () => {chooseOperator('subtract')});

const ac = document.getElementById('AC');
ac.addEventListener('click',clear);

document.getElementById('=').addEventListener('click', () => operate(numberArray,argumentsArray));