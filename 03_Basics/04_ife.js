// IIFE - Immediately invoked function definition
// --->used to remove the pollution caused in global scope


// this is named IIFE
// (funct def) (funct execution) 
    (function chai(){
        console.log(`DB CONNECTED`);  
    })();  //Here ; is must to stop IIFE


// This is unnamed IIFE
// In arrow format
    ( () =>{
        console.log(`DB CONNECTED`);
    })();


// passing parameter in IIFE
    ( (name) =>{
        console.log(`DB CONNECTED ${name}`);
    })("willow");