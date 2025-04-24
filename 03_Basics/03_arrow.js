const user = {
    username : "willow",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        
    }
}
user.welcomeMessage()

// it was due to this keyword, which do not hard code the value but gives value in context to.
user.username = "sam"
user.welcomeMessage()



// this.username method do not work in function
function one(){
    let username3 = "willow"
    console.log(this.username3);
}
one()

// this method also dont work this way in arrow function
const one = () => {
    let username3 = "willow"
    console.log(this.username3);
}
one()


// PURE ARROW FUNCTION
const addTwo = (n1, n2) => {
    return n1 + n2
}
console.log(addTwo(3, 4));

// Implicit method (VIP)
const addTwo2 = (n1, n2) => (n1 + n2)
console.log(addTwo2(3, 4));

// Return a object
const myObj = (credentials) => ({username: "willow"})
console.log(myObj());

