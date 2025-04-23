const tinderUSer = {}
tinderUSer.id = ""
tinderUSer.name = "sam"
tinderUSer.isLoggedIn = "false"
// console.log(tinderUSer);

const regularUser = {
    email: "Email@gmail.com",
    fullname: {
        userfullname : {
            fitsrname : "Willow",
            lastname : "novice"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);


// Merging values
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)  --> This is one way
const obj3 = {...obj1, ...obj2}   // --> this is famous way
console.log(obj3);


// comment out all above before using this
console.log("all keys stored in array: ", Object.keys(tinderUSer));
console.log("all values stored in array: ", Object.values(tinderUSer));
console.log("To check is property exits: ", tinderUSer.hasOwnProperty('isLoggedIn'));
console.log(Object.entries(tinderUSer));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// its fine
console.log(course.courseInstructor);

// for complex usage - renaming for simple use (object-desconstructing)
const {courseInstructor: CI} = course
console.log(CI);
