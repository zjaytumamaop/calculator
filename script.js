//javascript 
let first = 1;

let operator = "add";

let second = 3;

let sum = 23;

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
    const num = window[operator](first, second); // Assuming operator is a valid function in the window object.
    resultElement.innerHTML = num; // Display the result in the 'result' element.
 }
 

//console.log(operate());

document.getElementById('=').addEventListener('mousedown', operate(operator,first,second));