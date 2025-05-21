// 1. Declare a variable score and assign a number. Increase it by 10 using the += operator and log the result.

let score = 5
score += 10;
console.log(score);


// 2. Use typeof to check and print the type of: a number, a string, a boolean, and null.

console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof Boolean);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);


// 3. Create a string variable with value "JavaScript is fun" and convert it to uppercase.

let string = "Js is fun"
console.log(string.toUpperCase());



// 4. Take a number and check if it’s even or odd using the % operator. Log "Even" or "Odd".

const checkNum = 5;
// Note:- % means remainder not divided, Logic:- if num divided by 2 and leaves remainder 0
if(checkNum % 2 === 0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}



// 5. Create a variable radius = 7. Calculate and print the area of a circle. (hint: use Math.PI * r * r)

const radius = 7;
const area = Math.PI * radius * radius;
console.log(`If radius is ${radius} then its area is ${area}`);



// 6. Declare a variable without assigning a value. Print its value and type.
let x;
console.log(x);
console.log(typeof x);



// 7. Concatenate a string and a number. Example: "Score: " and 95. What’s the result?

let scoreString = "Score: "
let numberNum = 15;
console.log(scoreString + numberNum);



// 8. Use Math.random() to generate a random number between 1 and 10. (hint: use Math.floor() too)

let randomNum = Math.floor((Math.random() * 100) + 1);
console.log(`Random number between 1 and 100 : ${randomNum}`);



// 9. Create a variable isLoggedIn = false. Use an if statement to print "Welcome" only if it’s true.

let isSignedIn = false;
if(isSignedIn){
    console.log("you are welcome");
}
else{
    console.log("Not Welcome");
}



// 10. Create two strings firstName and lastName. Use a template literal to print "Full name is: John Doe".

let fName = "Willow "
let mName = "The "
let lName = "Novice"
let result = fName.concat(mName).concat(lName);
console.log(result);
