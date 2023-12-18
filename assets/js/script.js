let inputArray = [];
let result = 0;

/**
numberPad checks which number button is pushed 
and adds the value to the inputArray
*/
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

/**
functionPad checks which function button is pushed 
and performs the corresponding calculation
*/
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
    displayFinalCalculation();
}

// Calculation functions

/**
Displays calculated output (result) 
in the outputField with a format " = x"
*/
function displayFinalCalculation() {
    if (inputArray != "") {
        let outputField = document.getElementById("output-field");
        outputField.textContent = ` = ${result}`;
    }
}

/**
Calculates the sine of the value entered
*/
function calculateSin() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.sin(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `Sin(${x})`;
    }
}

/**
Calculates the cosine of the value entered
*/
function calculateCos() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.cos(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `Cos(${x})`;
    }
}

/**
Calculates the tangent of the value entered
*/
function calculateTan() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.tan(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `Tan(${x})`;
    }
}

/**
Calculates the arc sine of the value entered
*/
function calculateArcSin() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.asin(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `arc Sin(${x})`;
    }
}

/**
Calculates the arc cosine of the value entered
*/
function calculateArcCos() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.acos(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `arc Cos(${x})`;
    }
}

/**
Calculates the arc tangent of the value entered
*/
function calculateArcTan() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.asin(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `arc Tan(${x})`;
    }
}

/**
Calculates the log (in base 10) of the value entered
*/
function calculateLog10() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.log10(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `Log10(${x})`;
    }
}

/**
Calculates the natural log of the value entered
*/
function calculateLn() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.log(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `Log(${x})`;
    }
}

/**
Calculates e to the power of the value entered
*/
function calculateExponent() {
    if (inputArray == "") {
        alert("Invalid input. Please enter a number");
    }
    else {
        let x = parseFloat(inputArray.join(''));
        result = Math.exp(x);
        let inputField = document.getElementById("input-field");
        inputField.textContent = `e^(${x})`;
    }
}