var displayDiv = document.querySelector("#display");
// displayDiv.value = displayDiv.innerText;
displayDiv.innerText = "";
var operator = "";
var result = 0;
var num1 = 0; 
var num2 = 0; 

function press(element) {
    displayDiv.innerText += element;
    displayDiv.value = displayDiv.innerText; 
    if (operator == "") {
        num1 = displayDiv.value;
    } else {
        num2 = displayDiv.value;
    }
    // console.log(operator);
    console.log("This is num1 " + num1);
    console.log("This is num2 " + num2);
}

function clr() { 
    displayDiv.innerText = "";
    num1 = 0; 
    num2 = 0; 
    operator = ""; 
}

function setOP(element) {
    operator = element;
    displayDiv.innerText = "";
    console.log("This is the operator " + operator);
    
}
function calculate() { 
    if (operator == "+" ) {
        result = parseFloat(num1) + parseFloat(num2); 
        displayDiv.value= result; 
        displayDiv.innerText = displayDiv.value; 
        num1 = result; 
        console.log("Result with + " + displayDiv.value);
    } else if (operator == "-") {
        result = parseFloat(num1) - parseFloat(num2); 
        displayDiv.value= result; 
        displayDiv.innerText = displayDiv.value; 
        num1 = result; 
        console.log("Result with - " + displayDiv.value);
    } else if (operator == "/") {
        result = parseFloat(num1) / parseFloat(num2); 
        displayDiv.value= result; 
        displayDiv.innerText = displayDiv.value; 
        num1 = result; 
        console.log("Result with / " + displayDiv.value);
    } else if (operator == "*") {
        result = parseFloat(num1) * parseFloat(num2); 
        displayDiv.value= result; 
        displayDiv.innerText = displayDiv.value; 
        num1 = result; 
        console.log("Result with * " + displayDiv.value);
    }
}
