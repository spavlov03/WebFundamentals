// 1. Print 1-255
// print1To255()
// Print all the integers from 1 to 255

// function print1To255() { 
//     for ( i=1 ; i<=255 ; i++) { 
//         console.log(i); 
//     }
// } print1To255(); 

// 2. Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.

// function printOdds1To255() { 
//     for (i=1 ; i<=255; i++){
//         if ( i % 2 !==0) { 
//             console.log(i)
//         }
//     }
// } printOdds1To255();

// 3. Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer
// print the sum so far.

// var sum = 0; 
// function printIntsAndSum0To255() { 
//     for ( i=0; i<=255; i++) { 
//         console.log(i); 
//         sum = sum+i; 
//         console.log("Sum is : " + sum);
//     }
// } printIntsAndSum0To255();

// 4. Iterate and Print Array
// printArrayVals(arr)
// Iterate through a given array, printing each value.

// function printArrayVals(arr) { 
//     for ( i = 0; i<arr.length ; i++) { 
//         console.log(arr[i]); 
//     }
// } printArrayVals([1 , 2 , 5 , -9 , -55 , 10]);

// 5. Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element.

// function printMaxOfArray(arr) { 
//     var max = arr[0]; 
//     for (i=0 ; i<arr.length ; i++) { 
        
//         if ( arr[i] > max) { 
//             max = arr[i]
//         } 
//     }     
//     console.log(max);
// } printMaxOfArray([1 , 2 , 800 , -9 , -55 , 100]); 

// 6. Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average.

// function printAverageOfArray(arr) { 
//     var sum = 0;     
//     for (i=0 ; i<arr.length ; i++){ 
//         sum = sum + arr[i]
    
//     } var avg = sum/arr.length; 
//     console.log("Average is : " + avg); 
// } printAverageOfArray([1 , 2 , 5 , 18 , 9 , 10]);

// 7. Array with Odds
// returnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255 (inclusive).

// var newArr = []; 
// function returnOddsArray1To255() { 
//     for ( i=1; i<=255 ; i++) { 
//         if (i % 2 !=0) {
//             newArr.push(i);
//         }
//     }return newArr;

// } console.log(returnOddsArray1To255());

// 8. Square the Values
// squareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

// function squareArrayVals(arr) { 
//     for (i=0; i<arr.length ; i++ ) { 
//         arr[i] = arr[i]*arr[i]; 
//     } console.log(arr);
// }
// squareArrayVals([2 , 3 , 5 , 7 , 9 , 10]);

// 9. Greater than Y
// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the
// number of array values greater than Y.

// function printArrayCountGreaterThanY(arr, y) { 
//     for (i=0; i<arr.length ; i++) { 
//         if ( arr[i]>y) { 
//             console.log(arr[i]); 
//         }
//     }
// } printArrayCountGreaterThanY([2 , 3 , 5 , 7 , 9 , 10], 6); 

// 10. Zero Out Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative
// values to zero.

// function zeroOutArrayNegativeVals(arr) { 
//     for ( i=0; i<arr.length ; i++) { 
//         if ( arr[i] < 0) {
//             arr[i] = 0; 
//         }
//     } console.log(arr);
// } zeroOutArrayNegativeVals([2 , 3 , -5 , 7 , -9 , 10]);

// 11. Max, Min, Average
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average
// values for that array.

// function printMaxMinAverageArrayVals(arr) { 
//     var max = arr[0];
//     var min = arr[0]; 
//     var sum = 0; 
//     for (i=0; i<arr.length; i++) { 
//         sum = sum+arr[i]; 
//         if (arr[i]>max) {
//             max = arr[i];
//         } if (arr[i]<min) { 
//             min = arr[i]
//         }
//     }
//     console.log("Max is : " + max)
//     console.log("Min is : " + min)
//     console.log("Average  is : " + sum/arr.length)
// } printMaxMinAverageArrayVals([89 , 3 , 5 , 7 , 9 , 10]);

// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left)
// by one index, dropping the first value and leaving a 0
// (zero) value at the end of the array.

// function shiftArrayValsLeft(arr){
//     for (i=0; i<arr.length; i++ ){
//         arr[i]=arr[i+1]
//     } arr[arr.length-1] = 0;
//     console.log(arr);
// } shiftArrayValsLeft([89 , 3 , 5 , 7 , 9 , 10]);


// 13.  Swap String For Array Negative Values
//      swapStringForArrayNegativeVals(arr)
//      Given an array of numbers, replace any negative
//      values with the string 'Dojo'.

// function swapStringForArrayNegativeVals(arr) { 
//     for ( i = 0 ; i<arr.length ; i++) {
//         if (arr[i]<0) {
//             arr[i] = "Dojo"
//         }
//     } return arr; 
// }

// console.log(swapStringForArrayNegativeVals([5 , -2 , 9 , -6 , 10]));