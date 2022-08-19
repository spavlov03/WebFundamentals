// Challange 1

function offNums() { 
    for ( i=1; i<=20 ; i++) { 
        if ( i % 2 != 0 ) { 
            console.log(i);
        }
    }
} offNums();

// Challange 2

function decreseThrees() { 
    for ( i=100; i>=0; i--) {
        if (i % 3 == 0) { 
            console.log(i);
        }
    }
} decreseThrees();

// Challange 3

function sequence() { 
    // First way of doing this
//     for ( i=4; i>=-3.5 ; i-=1.5) {
//         console.log(i);
//     }
    // Second way of doing this
    var i = 4; 
    while (i>=-3.5) {
        console.log(i);
        i-=1.5; 
    } 
}sequence();

// Challange 4


function addUp() {
    var sum = 0 ; 
    for (i=1; i<=100; i++) {
        sum = sum + i 
    } console.log(sum); 

} addUp(); 

// Challange 5

function multiplyAll() { 
    var mul = 1; 
    for (i=1; i<=12; i++) { 
        mul = mul * i
    } console.log(mul);
} multiplyAll(); 