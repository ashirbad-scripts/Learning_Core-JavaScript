const name = "abc"
const repocount = 50

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// accesing key value pairs
const gameName = "willow-T-N"
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('o'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newString1 = "    No-whiteSpaces    "
console.log(newString1.trim());

console.log(gameName.split('-'));


const url = "https://replace.com/willow%20TN"
console.log(url.replace('%20', '-'))
console.log(url.includes('novice'))