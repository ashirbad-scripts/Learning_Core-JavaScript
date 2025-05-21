
// 1. Declare a variable `count = 0`. Increase it by 1 using the `++` operator and print it.

let count = 0;
count++;
console.log(count);


// 2. Use `Math.pow()` to calculate 3 raised to the power of 4.

let a = 4
let b = 3
let result = Math.pow(a, b)
console.log(result);



// 3. Create a variable with a float number like `5.678`. Round it to 2 decimal places. (hint: `toFixed()`)

let floatNum = 5.678
let rounded = floatNum.toFixed(2)
console.log(rounded);


// 4. Check if a number is divisible by both 2 and 3. Log `"Divisible"` or `"Not divisible"`.

let number = 18;
if (number % 2 == 0 && number % 3 ==0){
    console.log("Its divisble");
}
else{
    console.log("not");
    
}

// 5. Create a variable with a string that includes spaces before and after. Trim it and print the result.

let stringVar = "  Willow  "
let trimVar = stringVar.trim();
console.log(trimVar);



// 6. Store a sentence in a string variable. Find and print the length of that sentence.

let sentence = "willowTheNovice"
console.log(sentence.length);


// 7. Replace the word `"bad"` with `"good"` in the string `"This is a bad idea"`.

let word = "This is a bad idea"
let replacedWord = word.replace("bad", "good")
console.log(replacedWord);


// 8. Check if a variable is `null`. If yes, log `"It's null"`.

let data = null;
if(data == null){
    console.log("ITS null");
}

// 9. Use `parseInt()` to convert a string `"123"` to a number and log its type.

let z = '123'
let zNum = parseInt(z)
console.log(zNum);
console.log(`z is a : ${typeof z}`);
console.log(`zNum is a : ${typeof zNum}`);


// 10. Create a variable `email = "user@example.com"`. Check if it includes `"@"` and log `"Valid"` or `"Invalid"`.

let email = "willow@gmail.com";
if(email.includes("@")){
    console.log("Its valid");
}