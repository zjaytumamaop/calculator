//javascript 
let first = 1;

let operator = "add";

let second = 3;
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
  return (window[operator](first,second));
}

console.log(operate());