//array specific loops

// for of
const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num); 
}

// Strings
const greetings = "Hello AI"
for (const greet of greetings) {
    console.log(greetings);
    // console.log(greet);
}


// MAPS
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
// console.log(map);

// for of loop
for (const key of map) {
    // console.log(key);
}

// Intresting syntax
for (const [key, value] of map) {
    console.log(key, ": - ", value);
}


// object is not iterable
// to make it iterable use for-in loop
const myObj = {
    'game1':"NFS",
    'game2': "spiderman"
}
for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`);  
}


// FOR - IN LOOPS
// for-in on array
// for-in gives keys
const programming = ["js", "rb", "py", "c", "c++"]
for (const key in programming) {
   console.log(programming[key]);
}



// // for-in on maps. -->map is not iterable
// const map1 = new Map()
// map1.set('IN', "India")
// map1.set('Fr', "France")
// for (const key in map1) {
//     console.log(key);   
// }


//** object --> for of
//** array --> for in



// FOR - EACH
const coding = ["js", "rb", "py", "c", "c++"]
coding.forEach( function (val) {
    console.log(val);
} )


const coding1 = ["js", "rb", "py", "c", "c++"]
coding1.forEach( (item)  => {
    console.log(item);
})



// MOST USED --> IMP
const myCoding = [
    {
        languageName: "javascript",
        langaugeFileName: "js"
    },
    {
        languageName: "java",
        langaugeFileName: "java"
    },
    {
        languageName: "python",
        langaugeFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log("Language Name :- ", item.languageName);
    console.log("File Name :- ",item.langaugeFileName);
})