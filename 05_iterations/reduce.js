const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currval){
    console.log(`acc: ${accumulator}, currval: ${currval}`); 
    return accumulator + currval
}, 0)
console.log(myTotal);



// using arrow functions
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 ) 
// console.log(myTotal);



// Example
const shoppinCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 1999
    },
    {
        itemName: "Data science",
        price: 12999
    }
]

// Add all prices from shopping cart
const priceToPay = shoppinCart.reduce( (acc, item) => acc + item.price , 0 )
console.log(priceToPay);
