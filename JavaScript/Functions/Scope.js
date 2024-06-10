var c=400
if(true){
    let a=12
    const g=12
    var c=34
    
}
console.log(a);
console.log(b);
console.log(c);

/// The code which is being under {} is called as Local Scope//
/// The code is being outside the {} is called as Global Scope//
// local Scope code is not being used outside the scope untill unless we use var to declare //


const newArray=[12,34,56,78,90]

function firstElement(accessFirst){

    return accessFirst[0]
}

console.log(firstElement(newArray));


// write a function to access objects//

const tata={
    carName:"Safari",
    carPrice:340000,
    carType:"SUV",
    carFuel:"Disel"
}

function myFavcar(carhandler){

    return ` my Favorite car is ${carhandler.carName} price of the car is ${carhandler.carPrice} 
    it is a ${carhandler.carType} and it enginer is ${carhandler.carFuel} and Safari is ${carhandler.carType}`
}
console.log(myFavcar(tata))
// scope we cheack in the console in Web Browser is different //
//Scope we cheack in the Coding Environment is different//
