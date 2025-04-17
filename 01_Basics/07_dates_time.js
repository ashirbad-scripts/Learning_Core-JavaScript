let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

let myCreateDate = new Date(2025, 2, 24)  // Date(year, month(starts form 0), date)
console.log(myCreateDate.toDateString());


// another format YYYY/MM/DD
let myCreatedDate = new Date("2025-03-24");
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());

// in miliseconds
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

// Basics
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());


