var count = [3,5,8]; 
var counter = document.querySelectorAll(".counter");

function addPet(bnum) { 
    count[bnum]++;
    counter[bnum].innerText = count[bnum] + " petting(s)";
}
// function choosePet(element){
//     alert('You are looking for a ' + element.value)
// } Can also use this function to alert of the type of pet looking for. 