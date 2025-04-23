const marvel_heroes = ["thor", "ironman", "strange"]
const dc_heroes = ["superman", "flash", "batman"]


// It pushes an array in existing array
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log("0th index: ", marvel_heroes[0]);
console.log("3rd index: ",marvel_heroes[3]);
console.log("3rd index's - 1st index: ",marvel_heroes[3][1]);



// It merges two arrays and gives new array
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);



// same as push but more used
const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros);


// flat 
const another_array = 
    [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// gives all array elements in a single array - depth can be controlled inside -> ()
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Convert string to array
console.log(Array.isArray("Willow"));
console.log(Array.from("Willow")); //give each element of string as array elements
console.log(Array.of("Willow"));  //give the whole string as single array element


// Example - convert to array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
