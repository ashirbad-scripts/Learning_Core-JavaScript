const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]); //access 0th index

myArr.push(6)  //add the mentioned element in array
myArr.pop() //Removes the last element
console.log(myArr);


console.log(myArr.includes(9)); //check is it present or not
console.log(myArr.indexOf(3));


const newArr = myArr.join()  //convert to strings


// **important -------------->
// slice and splice
const myArr2 = [0, 1, 2, 3, 4, 5]

console.log("A -> Original array", myArr2);  
const myn1 = myArr2.slice(1, 3)
console.log("sliced array: ",myn1);  //sliced array


console.log("B -> original array", myArr2); 
const myn2 = myArr2.splice(1, 3)
console.log("C -> spliced original array", myArr2); 
console.log("spliced array: ",myn2); //spliced array


//** Slice return the sliced portion of array but do not change OG array

//** Splice return the spliced array and also changes the original array 
// (it removes the mentioned portion from OG array and present it as new arrray)



