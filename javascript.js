const number = document.querySelectorAll(".number");
const overall = document.querySelector(".overall");
const button = document.querySelectorAll("button");
const littleContainer = document.querySelector(".littleContainer");
const equal = document.querySelector(".equal");
littleContainer.textContent='';

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}  

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let number1 = "";
let operator = "";
let number2 = "";


function operate(operator,number1,number2) {
    switch(operator) {
    case "+" : 
    return add(number1,number2);
    case "-" : 
    return subtract(number1,number2);
    case "*" : 
    return multiply(number1,number2);
    case "/" : 
    return divide(number1,number2);
    }
}


// Display the numbers and operators 
function GetNumber(){
 button.forEach(container => {
    container.addEventListener("click", () => {
    const num = container.textContent;
        littleContainer.textContent += num;
    });
});
};

GetNumber();

function GetResult (){
    equal.addEventListener("click",() => {
        if("=")
            littleContainer.textContent += operate(number1,operator,number2);
    })
}
GetResult ();