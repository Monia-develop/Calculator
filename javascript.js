const numberButtons = document.querySelectorAll(".number button");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const littleContainer = document.querySelector(".littleContainer");

littleContainer.textContent = "";

function add(a, b) { 
    return a + b; 
}
function subtract(a, b) { 
    return a - b; 
}
function multiply(a, b) { 
    return a * b; 
}
function divide(a, b) { 
    return b === 0 ? "Error" : a / b; 
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return "Error";
    }
}

function GetNumber() {
    numberButtons.forEach(container => {
        container.addEventListener("click", () => {
            const text = container.textContent;
            
            if (container.classList.contains("equal") || 
                container.classList.contains("clear") || 
                container.classList.contains("operator")) {
                return; 
            }
            littleContainer.textContent += text;
        });
    });
}


GetNumber();


operatorButtons.forEach(opBtn => { //opBtn = operator button
    opBtn.addEventListener("click", () => {
        const current = littleContainer.textContent;
        const regex = /(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/;
        const match = current.match(regex);

        if (match) {
            //It is necessary to convert a into a number or else it won't work
            const a = parseFloat(match[1]);
            const operator = match[2];
            const b = parseFloat(match[3]);
            const result = operate(operator, a, b);
            littleContainer.textContent = result + opBtn.textContent;
        } else if (/[+\-*/]$/.test(current)) {
            littleContainer.textContent = current.slice(0, -1) + opBtn.textContent;
        } else {
            littleContainer.textContent += opBtn.textContent;
        }
    });
});

equal.addEventListener("click", () => {
    const expression = littleContainer.textContent;
    const regex = /(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/;
    const match = expression.match(regex);

    if (match) {
        const a = parseFloat(match[1]);
        const operator = match[2];
        const b = parseFloat(match[3]);
        const result = operate(operator, a, b);
        littleContainer.textContent = result;
    } else {
        if (!isNaN(parseFloat(expression))) {
            littleContainer.textContent = expression;
        } else {
            littleContainer.textContent = "Error";
        }
    }
});

clear.addEventListener("click", () => {
    littleContainer.textContent = "";
});
