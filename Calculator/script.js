var displayDiv = document.querySelector("#display");
displayDiv.innerText = "";
var math = ""; 
var opertator ="";

function press(element) {
    displayDiv.innerText += element;
    math += element;
    // console.log(math);
}

function clr() { 
    displayDiv.innerText = "";
    math = "";
}

function setOP(element) {
    math += element;
    displayDiv.innerText = "";
    // console.log(math);
}
function calculate() { 
    displayDiv.innerText = parseInt(eval(math));
}
