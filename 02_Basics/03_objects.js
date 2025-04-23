// singleton
// it is made when object is created through constructor method i.e
// Object.create


// **MAKE SURE TO COMMENT OUT OTHER TOPIC BEFORE EXECUTING ONE TOPIC
// object literals
const JsUser = {
    name: 'willow',
    age: 25,
    location: "forest",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// Two approach
console.log(JsUser.name);
console.log(JsUser["name"]);


// overwritting values
JsUser.name = "name overwritten"
Object.freeze(JsUser)
JsUser.name = "Again"  // it will not hapen cuz obj is freezed
console.log(JsUser);


// Declaring a function in object & referencing object elements
JsUser.greeting = function() {
    console.log("hello js user");
}
JsUser.greeting2 = function() {
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





// **Interview question  - Execute separately
// Show a symbol inside object and print it
const mySymbol = Symbol()
const Object = {
    [mySymbol] : "This is Symbol"
}
console.log(Object[mySymbol])