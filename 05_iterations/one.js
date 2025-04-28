for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log();
    
}

// variable declared
// condition checked
//line 2 execute 
// line 3 execute
// index++
// again continues

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("Element is 5");
    }
    console.log(element);
}



for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and inner loop: ${i}`);
    }    
}


// Table
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' +i*j );        
    }    
}



// array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}          



// Break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break
    }
    console.log("value of index is: ", index)  
}



// Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is skipped");
        continue
    }
    console.log("value of index is: ", index)  
}