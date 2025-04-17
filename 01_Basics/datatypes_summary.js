/* Primitve types:-
    string, number, boolean, 
    null, undefined, symbol, bigInt
*/

/* Reference (non-primitive) :-
    object, array, function
*/
 
const Id = Symbol("123")
const anotherID = Symbol("123")
console.log(Id === anotherID); // false

// arrays mini example

const heroes = ["Iron Man", "Thor", "Doctor Strange"];
let myObj = {
    name: "Tony Stark",
    age: 28,
    occupation: "Genius Billionaire Philanthropist"
};


const myFunction = function(){
    console.log("Hello, world!");
}



// ********** Memories **********

// Stack used for (primitive), 
// Heap used for (non-primitive)

/* when changing in stack, a duplicate value of original value is created
   when changing in heap, the original value's are changes
*/



let gitName = "ashirbad"

let anothername = gitName
anothername = "willow"

console.log(gitName);
console.log(anothername);

// -----------------------------
let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let user2 = user1
user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);
