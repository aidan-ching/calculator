function addToOutput(str) {
    output.textContent += str;
}

function clearDisplay() {
    output.textContent = "";
}

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
    return a / b;
}

function clearAll() {
    lhs = 0;
    rhs = 0;
    op = 0; //0 is clear, 1 is plus, 2 is minus, 3 is multiply, 4 is divide
    clearDisplay();
}

function evaluate(lhs, rhs, operation) {
    if (operation == 1) {
        return add(lhs, rhs);
    } else if (operation == 2) {
        return subtract(lhs, rhs);
    } else if (operation == 3) {
        return multiply(lhs, rhs);
    } else if (operation == 4) {
        return divide(lhs, rhs);
    }
    return "ERR";
}

function opToInt(str) {
    if (str == "+") {
        return 1;
    } else if (str == "-") {
        return 2;
    } else if (str == "x") {
        return 3;
    } else if (str == "÷") {
        return 4;
    }
}

let lhs = 0;
let rhs = 0;
let op = 0; //0 is clear, 1 is plus, 2 is minus, 3 is multiply, 4 is divide


const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#delete');
const opButtons = document.querySelectorAll('.opButton');
const equals = document.querySelector('#equals');

buttons.forEach(button => { button.addEventListener('click', function (e) { addToOutput(e.target.textContent); }) });

opButtons.forEach(opButton => {
    opButton.addEventListener('click', function (e) {
        if (op == 0) { //just populate lhs and continue to populate rhs until prompted
            op = opToInt(e.target.textContent);
            lhs = parseInt(output.textContent, 10);
            clearDisplay();
        } else if (op != 0) {
            rhs = parseInt(output.textContent, 10);
            console.log(lhs);
            console.log(rhs);
            console.log(op);
            output.textContent = evaluate(lhs, rhs, op);
            lhs = evaluate(lhs, rhs, op);
            op = opToInt(e.target.textContent);
            rhs = 0;
        }
    })
});

equals.addEventListener('click', function(){

    if(op != 0){
        rhs = parseInt(output.textContent, 10);
        output.textContent = evaluate(lhs, rhs, op);
        lhs = evaluate(lhs, rhs, op);
        op = 0;
        rhs = 0;
    }
})

clear.addEventListener('click', clearAll);
