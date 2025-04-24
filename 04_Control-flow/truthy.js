// // Falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// // Truthy values
// "0", 'flase', " ", [], {}, function(){}


// assumed true value
const email = "w@gmail.com"
// const email = ""      //--> check these also
// const email = []

if (email){
    console.log("Got it");
}
else{
    console.log("No email");
}



// To check array
const Gmail = []
if(Gmail.length === 0){
    console.log("Array is empty");    
}



// To check object
const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined
let val1, val2, val3, val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Ternary Operator
condition ? true : false

// Example
const iceTea = 100
iceTea >= 80 ? console.log("more than 80") : console.log("less than 80");