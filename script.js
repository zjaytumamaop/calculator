//javascript 
let first = 13;

let operator = "add";

let second = 3;

let currentNum = 0;

let displayNum = 0;

function add(a,b){
    return a +b;
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

function operate(operator, first, second) {
    const resultElement = document.querySelector('.result');
    displayNum = window[operator](first, second); // Assuming operator is a valid function in the window object.
    resultElement.innerHTML = displayNum; // Display the result in the 'result' element.
}

function clickedButton(event){
    const buttonValue = event.target.id;
    console.log(buttonValue);
    displayNum = displayNum + buttonValue;
    console.log(displayNum);
    updateDisplayNum();
}
 
function updateDisplayNum(){
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = displayNum;
}

//console.log(operate());
const numbers = document.querySelectorAll('.num');
numbers.forEach(function (number) {
    number.addEventListener('click', clickedButton);
    number.addEventListener('click', updateDisplayNum);
});




document.getElementById('=').addEventListener('click', () => operate(operator,first,second));