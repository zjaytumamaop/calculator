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

function operate(){
   const result = document.getElementById('result');
   result.innerHTML =  (window[operator](first,second));
}

console.log(operate());

document.getElementById('=').addEventListener('mousedown', operate());