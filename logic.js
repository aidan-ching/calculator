function addToOutput(str) {
    output.textContent += str;
}

function generatePrevious(){
    return lhs + " " + opToString(op)+ " " + rhs + " = ";
}

function clearDisplay() {
    output.textContent = "";
    previous.textContent = "";
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

function opToString(num){
    if (num == 1){
        return "+";
    } else if(num == 2){
        return "-";
    } else if(num == 3){
        return "x";
    } else if (num == 4){
        return "÷";
    }
    else{
        return "ERR";
    }
}

function printStatus(){
    console.log("LHS:" + lhs);
    console.log("RHS:" + rhs);
    console.log("OP:" + op);
    console.log("result:" + evaluate(lhs, rhs, op));
}

let lhs = 0.0;
let rhs = 0.0;
let op = 0; //0 is clear, 1 is plus, 2 is minus, 3 is multiply, 4 is divide
let clearOnNextPress = false;


const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#delete');
const opButtons = document.querySelectorAll('.opButton');
const equals = document.querySelector('#equals');
const controlButtons = document.querySelectorAll('.controlButton');
const previous = document.querySelector('#previous');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        if(clearOnNextPress){
            clearDisplay();
            clearOnNextPress = false;
        }
        addToOutput(e.target.textContent);
    })
});

opButtons.forEach(opButton => {
    opButton.addEventListener('click', function (e) {
        if (op == 0) { //just populate lhs and continue to populate rhs until prompted
            op = opToInt(e.target.textContent);
            lhs = parseInt(output.textContent, 10);
            clearDisplay();
        } else if (op != 0) {
            rhs = parseInt(output.textContent, 10);
            printStatus();
            previous.textContent = generatePrevious();
            output.textContent = evaluate(lhs, rhs, op);
            lhs = evaluate(lhs, rhs, op);
            op = opToInt(e.target.textContent);
            rhs = 0;
            clearOnNextPress = true;
            
            
        }
    })
});

equals.addEventListener('click', function () {
    if (op != 0) {
        rhs = parseInt(output.textContent, 10);
        printStatus();
        previous.textContent = generatePrevious();
        
        output.textContent = evaluate(lhs, rhs, op);
        lhs = evaluate(lhs, rhs, op);
        console.log(lhs);
        op = 0;
        rhs = 0;
        clearOnNextPress = true;
        
        
    }
})

clear.addEventListener('click', clearAll);

backspace.addEventListener('click', function(){
    output.textContent = output.textContent.substr(0, output.textContent.length-1);
})



//visual logic stuff
buttons.forEach(button => {button.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "#dcd6f7af";
})});

buttons.forEach(button => {button.addEventListener('mouseout', function(e){
    e.target.style.backgroundColor = "#DCD6F7";
})});

opButtons.forEach(opButton => {opButton.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "#dcd6f7af";
})});

opButtons.forEach(opButton => {opButton.addEventListener('mouseout', function(e){
    e.target.style.backgroundColor = "#DCD6F7";
})});

controlButtons.forEach(controlButton => {controlButton.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "#dcd6f7af";
})});

controlButtons.forEach(controlButton => {controlButton.addEventListener('mouseout', function(e){
    e.target.style.backgroundColor = "#DCD6F7";
})});

equals.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "#dcd6f7af";
});

equals.addEventListener('mouseout', function(e){
    e.target.style.backgroundColor = "#DCD6F7";
});