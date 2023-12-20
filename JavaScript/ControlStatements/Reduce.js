/// Reduce method in JavaScript//

let number=[12,34,56,100]

// let savenumber= number.reduce(function(acc,currval){

//     console.log(`acc is ${acc} and currval is ${currval}`)
//     return acc+currval;
// },0)

// console.log(savenumber)



// let numbers=[12,34,56,101]
// let reducenumber=numbers.reduce((ac,cuva)=>{

//     console.log(`Accumulator value is ${ac} and  cuurent value is ${cuva}`)
//     return ac+cuva
// },0 )
// console.log(reducenumber)

/// Applying Reduce function to the cart to calculate totoal price//

let shoppingCart=[

    {
        "id": 1,
        "name": "I phone 13",
        "price": 200,
        "quantity": 2
    },
    {
        "id": 2,
        "name": "I phone 15",
        "price": 400,
        "quantity": 2
    },
    {
        "id": 1,
        "name": "I phone 11",
        "price": 560,
        "quantity": 1
    },

]


// const Total = shoppingCart.reduce( (accum,item) =>accum+(item.price* item.quantity),0)// Arrow//

const Total= shoppingCart.reduce( function(acc,item){// normal function//

    return acc+(item.price * item.quantity)


    
},0)

console.log(Total)