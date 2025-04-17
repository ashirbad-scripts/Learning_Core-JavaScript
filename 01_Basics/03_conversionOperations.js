// const score = 33

let score = "33"
let score1 = null
let score2 = undefined
let score3 = true


console.log(typeof score);
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);


// converting score to number
let valueInnumber = Number(score);
console.log(typeof valueInnumber);


console.log("if there is string in score then the output will be nan")
// value of score4 is number but it is nan
let score4 = "34ello"
let valueInnumber1 = Number(score4);
console.log(typeof valueInnumber1);
console.log(valueInnumber1);



// converting to boolean
let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



// converting numebr to string
let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);


// ******* operations *******

let value = 3
let negValue = -value
let PowerValue = value**2  //value to power 2
console.log(negValue);
console.log(PowerValue);



let str1 = "hello"
let str2 = " Man !"
let str3 = str1 + str2
console.log(str3);



// intresting
console.log("1" + 2 + 2);  //consider & join all as string
console.log(2 + 2 + "1");  //consider number first then join string
