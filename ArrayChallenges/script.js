// // Challenge 1
function alwaysHungry(arr) {
    for ( i=0; i<arr.length; i++) {
        var hasEaten = false;
        if (arr[i] == "food") {
            hasEaten = true; 
            console.log("yummy");
        } 
    }
        if (!hasEaten) 
        { 
            console.log("I'm hungry");
        }
    }
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// // // Challenge 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i<arr.length; i++) { 
        if (arr[i]>cutoff) { 
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// // // Challenge 3
function betterThanAverage(arr) {
    var sum = 0;
    for ( i=0; i<arr.length; i++) {
        sum = sum+arr[i]
    }
    var avg = sum/arr.length;
    var count = 0;
    for (i=0; i<arr.length; i++) { 
        if (arr[i]>avg) { 
            count++
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// // Challenge 4
function reverse(arr) {
    arr.reverse();
    
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Challenge 5
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (var i = 0 ; fibArr.length<n; i++) {
        fibArr.push(fibArr[i]+fibArr[i+1]);
        // console.log(fibArr[i + 1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]