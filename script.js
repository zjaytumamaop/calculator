//javascript 
let first = 0;

let operator = "";

let second = 3;

let currentNum = 0;

let displayNum = 0;

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

function operate(operator, first) {
    second = displayNum;
    displayNum = 0;
    
    const resultElement = document.querySelector('.result');
    displayNum = window[operator](first,second); // Assuming operator is a valid function in the window object.
    resultElement.innerHTML = displayNum; // Display the result in the 'result' element.
}

function clickedButton(event){
    const buttonValue = event.target.id;
    console.log(buttonValue);
    displayNum = displayNum + buttonValue;
    console.log(displayNum);
    

    if (displayNum.charAt(0) == 0){
        displayNum = displayNum.slice(1);
    }
    updateDisplayNum();
}
 
function updateDisplayNum(){
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = displayNum;
}

function chooseOperator(op){
    operator = op;
    first = displayNum;
    displayNum = 0;
    updateDisplayNum();
}

function clear (){
    displayNum = 0;
    updateDisplayNum();
    operator = '';
}

const numbers = document.querySelectorAll('.num');
numbers.forEach(function (number) {
    number.addEventListener('click', clickedButton);
    number.addEventListener('click', updateDisplayNum);
});


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

document.getElementById('=').addEventListener('click', () => operate(operator,first));