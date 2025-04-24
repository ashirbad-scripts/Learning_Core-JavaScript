// == check if value is same
if(2 == 2){
    console.log("true");
}
else{
    console.log("flase");   
}


// === check if type is same
if(2 === "2"){
    console.log("true");
}
else{
    console.log("false");   
}


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`) //--> it will not work cuz power declared in if block but called in global scope


// Nesting
const balance = 900

if (balance < 800){
    console.log("less than 800");
}
else if (balance < 950){
    console.log("less than 950");  
}
else{
    console.log("more than 950");
}


// more
const userLoggedIn = true
const member = false   //change to true to execute elseif
if (userLoggedIn && !member){
    console.log("Please become a member");
}
else if(userLoggedIn && member){
    console.log("Allowed to buy course");
}

// Note: || is or


// SWITCH Statement
let month = "april"
// const month = 3 //also works

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("No match found");
        break;
}

