var count = [0,0,0];
var h3 = document.querySelectorAll(".count")
    // document.querySelector("#count-2"),
    // document.querySelector("#count-3")
;

function addLike(bnum) {
    count[bnum]++;
    h3[bnum].innerText = count[bnum] + " like(s)";
}
 