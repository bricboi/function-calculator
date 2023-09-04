// const funcDiv = document.getElementsByClassName("function-div");

let inputArray = [];
let result = 0;

// function numLoad() {
//     let numDiv = document.getElementsByClassName("test");
//     numDiv.innerHTML = `
//     <button value="1" onclick="numberPad(value)">1</button>
//     <button value="2" onclick="numberPad(value)">2</button>
//     <button value="3" onclick="numberPad(value)">3</button>
//     <button value="4" onclick="numberPad(value)">4</button>
//     <button value="5" onclick="numberPad(value)">5</button>
//     <button value="6" onclick="numberPad(value)">6</button>
//     <button value="7" onclick="numberPad(value)">7</button>
//     <button value="8" onclick="numberPad(value)">8</button>
//     <button value="9" onclick="numberPad(value)">9</button>
//     <button value="0" onclick="numberPad(value)">0</button>
//     <button value="." onclick="numberPad(value)">.</button>
//     <button value="del" onclick="numberPad(value)">del</button>
//     <button value="clear" onclick="numberPad(value)">Clear all</button>
// `;
// }

// remember to remove console.log outputs before submitting!!!
// 20 is max input of numbers
// numberPad function for when buttons are pressed /* remove console.log outputs!!! */
function numberPad(value) {
    switch (value) {
        case "1":
            console.log("1");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "2":
            console.log("2");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "3":
            console.log("3");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "4":
            console.log("4");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "5":
            console.log("5");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "6":
            console.log("6");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "7":
            console.log("7");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "8":
            console.log("8");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "9":
            console.log("9");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "0":
            console.log("0");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case ".":
            console.log(".");
            inputArray.push(value);
            console.log(inputArray);
            break;
        case "del":
            console.log("Delete");
            inputArray.pop();
            console.log(inputArray);
            break;
        case "clear":
            console.log("Clear All");
            inputArray = [];
            result = "";
            let outputField = document.getElementById("output-field");
            outputField.textContent = result;
            console.log(inputArray);
            console.log(result);
            break;
    }
    // Resets output field and updates the input field
    result = "";
    let outputField = document.getElementById("output-field");
    outputField.textContent = result;
    let inputField = document.getElementById("input-field");
    inputField.textContent = inputArray.toString().replaceAll(",", "");
}

// functionPad function for when buttons are pressed /* remove console.log outputs!!! */
function functionPad(value) {
    switch (value) {
        case "sin":
            console.log("Sin(x)");
            calculateSin();
            break;
        case "cos":
            console.log("Cos(x)");
            calculateCos();
            break;
        case "tan":
            console.log("Tan(x)");
            calculateTan();
            break;
        case "asin":
            console.log("arc Sin(x)");
            calculateArcSin();
            break;
        case "acos":
            console.log("arc Cos(x)");
            calculateArcCos();
            break;
        case "atan":
            console.log("arc Tan(x)");
            calculateArcTan();
            break;
        case "log":
            console.log("Log(x)");
            calculateLog10();
            break;
        case "ln":
            console.log("Ln");
            calculateLn();
            break;
        case "e":
            console.log("e^x");
            calculateExponent();
            break;
    }
    finalCalculation();
}

// Calculation functions below vvv
// Final calculation
function finalCalculation() {
    console.log("=");
    let outputField = document.getElementById("output-field");
    outputField.textContent = ` = ${result}`;
}

// Sin, cos and tan /* remove console.log outputs!!! */
function calculateSin() {
    let x = parseFloat(inputArray.join(''));
    result = Math.sin(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Sin(${x})`;
}

function calculateCos() {
    let x = parseFloat(inputArray.join(''));
    result = Math.cos(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Cos(${x})`;
}

function calculateTan() {
    let x = parseFloat(inputArray.join(''));
    result = Math.tan(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Tan(${x})`;
}

// arc functions
function calculateArcSin() {
    let x = parseFloat(inputArray.join(''));
    result = Math.asin(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Sin(${x})`;
}

function calculateArcCos() {
    let x = parseFloat(inputArray.join(''));
    result = Math.acos(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Cos(${x})`;
}

function calculateArcTan() {
    let x = parseFloat(inputArray.join(''));
    result = Math.asin(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `arc Tan(${x})`;
}

// log and e functions
function calculateLog10() {
    let x = parseFloat(inputArray.join(''));
    result = Math.log10(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Log10(${x})`;
}

function calculateLn() {
    let x = parseFloat(inputArray.join(''));
    result = Math.log(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `Log(${x})`;
}

function calculateExponent() {
    let x = parseFloat(inputArray.join(''));
    result = Math.exp(x);
    console.log(result);
    let inputField = document.getElementById("input-field");
    inputField.textContent = `e^(${x})`;
}