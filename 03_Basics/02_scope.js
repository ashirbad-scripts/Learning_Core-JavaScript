// // Never use var
// var a = 500
// if (true) {
//     let b = 200;  //not get printed
//     var a = 200;  //get printed 
// }
// console.log(a); //since 500 decalred out of loop and log. also mentioned out of lop, 500 should show not 200


let a = 300
if (true) {
    let a = 200
    console.log("Value of a inside block scope ", a);
}
console.log("value of a in global scope: ", a);



// Nested scope
function one() {
    const username = "willow"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // one cannot access two
    two()
}
one()


// if-else
if(true) {
    const userName = "willow"
    if(userName === "willow"){
        const website2 = "youtube"
        console.log(userName + website2);
    }
   // console.log(website2);  //can't accessed since outside scope
}
// console.log(userName); //can't accesss since it will declared in block scop but is called in global scope


// ------------------ Intresting --------------


// here console.log declared before function and still get printed
console.log(addone(5));
function addone(num) {
    return num + 1
}


// here console.log decalred before function but throws error
console.log(addTwo(5));
const addTwo = function(num){
    return num + 1
}
 