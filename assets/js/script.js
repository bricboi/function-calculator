let inputArray = [];
let result = 0;

// numberPad function for when buttons are pressed
function numberPad(value) {
    switch (value) {
        case "1":
            inputArray.push(value);
            break;
        case "2":
            inputArray.push(value);
            break;
        case "3":
            inputArray.push(value);
            break;
        case "4":
            inputArray.push(value);
            break;
        case "5":
            inputArray.push(value);
            break;
        case "6":
            inputArray.push(value);
            break;
        case "7":
            inputArray.push(value);
            break;
        case "8":
            inputArray.push(value);
            break;
        case "9":
            inputArray.push(value);
            break;
        case "0":
            inputArray.push(value);
            break;
        case ".":
            inputArray.push(value);
            break;
        case "del":
            inputArray.pop();
            break;
        case "clear":
            inputArray = [];
            result = "";
            let outputField = document.getElementById("output-field");
            outputField.textContent = result;
            break;
    }
    // Resets output field and updates the input field
    result = "";
    let outputField = document.getElementById("output-field");
    outputField.textContent = result;
    let inputField = document.getElementById("input-field");
    inputField.textContent = inputArray.toString().replaceAll(",", "");
}

// functionPad function for when buttons are pressed
function functionPad(value) {
    switch (value) {
        case "sin":
            calculateSin();
            break;
        case "cos":
            calculateCos();
            break;
        case "tan":
            calculateTan();
            break;
        case "asin":
            calculateArcSin();
            break;
        case "acos":
            calculateArcCos();
            break;
        case "atan":
            calculateArcTan();
            break;
        case "log":
            calculateLog10();
            break;
        case "ln":
            calculateLn();
            break;
        case "e":
            calculateExponent();
            break;
    }
    finalCalculation();
}

// Calculation functions below vvv
// Final calculation
function finalCalculation() {
    let outputField = document.getElementById("output-field");
    outputField.textContent = ` = ${result}`;
}

// Sin, cos and tan
function calculateSin() {
    let x = parseFloat(inputArray.join(''));
    result = Math.sin(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Sin(${x})`;
}

function calculateCos() {
    let x = parseFloat(inputArray.join(''));
    result = Math.cos(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Cos(${x})`;
}

function calculateTan() {
    let x = parseFloat(inputArray.join(''));
    result = Math.tan(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Tan(${x})`;
}

// arc functions
function calculateArcSin() {
    let x = parseFloat(inputArray.join(''));
    result = Math.asin(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Sin(${x})`;
}

function calculateArcCos() {
    let x = parseFloat(inputArray.join(''));
    result = Math.acos(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Cos(${x})`;
}

function calculateArcTan() {
    let x = parseFloat(inputArray.join(''));
    result = Math.asin(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Tan(${x})`;
}

// log and e functions
function calculateLog10() {
    let x = parseFloat(inputArray.join(''));
    result = Math.log10(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Log10(${x})`;
}

function calculateLn() {
    let x = parseFloat(inputArray.join(''));
    result = Math.log(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Log(${x})`;
}

function calculateExponent() {
    let x = parseFloat(inputArray.join(''));
    result = Math.exp(x);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `e^(${x})`;
}