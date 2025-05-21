// 1. Declare a variable name and assign your name to it. Print it to the console.

let name = "willow"
console.log(`My name is ${name}`);


// 2. Create two variables x = 10 and y = 4. Multiply them and print the result.

const x = 10;
const y = 4;
const z = x * y;
console.log(z);


// 3. Create a variable isStudent and set it to true. Print the type of this variable.

let isStudent = true;
console.log(typeof isStudent);


// 4. Declare a variable temperature = 36.6. Convert it to a string and print the result with its type.

let temp = 36.6;
let tempString = String(temp);
console.log(tempString);


// 5. Create three variables with numbers. Calculate the average and log it to the console.

const a = 4
const b = 3
const c = 2
console.log("Average of a,b,c is: ", ((a+b+c)/2));



// 6. Create a variable message = "Hello" and another name = "John". Combine them into "Hello John" and log it.

let message = "Hello"
let name_q6 = "John"
console.log(message + " " + name_q6);


// 7. Create a variable with value undefined and print its type.

let variable_7 = undefined;
console.log(typeof variable_7);


// 8. Swap values of two variables a = 1 and b = 2 without using a third variable. (hint: use arithmetic)

let a8 = 1
let b8 = 2;

a8 = a8 + b8
b8 = a8 - b8 
a8 = a8 - b8
console.log(`a: ${a8} and b: ${b8}`);


// 9. Use prompt() to take user input for age and log "You are X years old" to the console. (hint: this only works in browser)

// Only works in browser
let age = prompt("What is your age: ");
console.log(age);


// 10. Declare a constant PI = 3.14159 and try reassigning it. What happens? (hint: try it and check the error)
let Pi = Math.PI
console.log(Pi);
console.log(typeof Pi);

