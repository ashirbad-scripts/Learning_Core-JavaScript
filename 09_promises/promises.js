console.log("Waiting for completion...");

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 1");
        resolve();   // connect resolve with .then
    }, 2000);
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 3000);
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "willow", email: "willow@gmail.com"})
    },4000)
})
promiseThree.then(function(user){
    console.log(user); 
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "Novice", password: "123"})
        }
        else{
            reject('Error! Something went wrong')
        }
    }, 5000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is resolved or rejected")
);





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            reject('Error! Js went wrong')
        }
    }, 6000);
})

// alternative of .then .catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// // --------- Dummy API Example ----------
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } 
//     catch (error) {
//         console.log("E: ", error);    
//     }
// }
// getAllUsers()


// --------- Dummy API Example using .then----------
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
