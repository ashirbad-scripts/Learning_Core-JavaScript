function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("Y");
}
sayMyName() //--> () it is compulsory


// // Basic Example
// function addTwoNumbers (number1, number2) {   //here n1 and n2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)  //here 3,4 are arguments


function addTwoNumbers (number1, number2) {   //here n1 and n2 are parameters
    
    let result = number1 + number2
    return result

    // //another approach
    // return number1 + number2
}
const result = addTwoNumbers(3, 4)
console.log("Result: ", result);



// other approaches
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("willow"));


// small intro of if-else
function loginUserMessage(username){
    if(username === undefined){
        console.log("please define the username");
        return
            //after return nothing below will get executed.
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());

// *pro approach
// if(username === undefined) is same as if(!username)

/*
    if user do not pass anything, you can give a default value 
    function loginUserMessage(username = "this is a default value"){..blah blah
    but once user decalres it in line 45, the default value will be overwritten
*/


// intro to rest operator 
function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200, 400, 500));


// function with objects
const user = {
    username : "willow",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);



// function with arrays
const myNewArray = [200, 400, 500, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
