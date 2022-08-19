var usrName = document.getElementById("name");

function changeName() {
    usrName.innerText = "Capitain Cook";
}

var reqCount = document.getElementById("requests-number");
var connCount = document.getElementById("connections-number");
// console.log(reqCount.innerText);
// console.log(connCount.innerText);
function acceptBtn() { 
    // console.log("Accept Btn");
    document.querySelector(".request-connection").remove();
    var number = parseInt(reqCount.innerText);
    number = number - 1;
    reqCount.innerText = number;
    var number2 = parseInt(connCount.innerText);
    number2 = number2 + 1;
    connCount.innerText = number2+"+";


}
function denyBtn() { 
    // console.log("Deny Btn");
    document.querySelector(".request-connection").remove();
    var number = parseInt(reqCount.innerText);
    number = number - 1;
    reqCount.innerText = number;
}