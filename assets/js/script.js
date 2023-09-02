let inputArray = [];

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
            console.log(inputArray);
            break;
    }
    let inputField = document.getElementById("input-field");

    inputField.textContent = inputArray.toString().replaceAll(",", "");
}