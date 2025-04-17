const score = 400
console.log(score);

const balance = new Number(100.24)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));



const otherNumber = 123.8957
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));


const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('es-US'));  //as per usa


// **from what we learned
let n1 = 5
let n2 = 2
n3 = n1**n2
console.log(`${n1} to power ${n2} is ${n3}`);



//  ******** MATHS ********
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));   // if greater than 4 it round up to next number
console.log(Math.floor(4.9));  // even if its greater. keeps number same
console.log(Math.min(4 ,3, 7, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);  //+1 to avoid 0


// Within Range Generation  
const min = 1
const max = 5

console.log(Math.random() * (max - min + 1));  // done to give range of generated number between 1 and 5
console.log(Math.floor(Math.random() * (max - min + 1)));  //avoid decimals
