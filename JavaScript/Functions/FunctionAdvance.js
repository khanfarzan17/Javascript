// Using of REST AND SPREAD IN A FUNCTION//

function calculatecartPrice(val1,val2,...num1){// Rest Method//

    // console.log(val1);
    // console.log(val2);
    return num1
}
//console.log(calculatecartPrice(230,400,500,700));// Gives in array Format//


//// Passing Object in Fucntion//

const Oragnization={
    companyName:"SLK Software PVT limited",
    companyLocation:"Bangalore",
    companyStrength:5000,
    companyNetworth:"1 Billion Dollars",

}

function companyDetails(anyobject){
    console.log(`My oragnization name is ${anyobject.companyName} and it is located in ${anyobject.companyLocation}
    SLK employee size is ${anyobject.companyStrength} and the Toatal NetWorth is ${anyobject.companyNetworth}`)
}
// companyDetails(Oragnization)
// We can Directly Pass the Parameters //
// No need to make the 
companyDetails({

    companyNetworth:"500 Million Dollar",
    companyLocation:"PUNE",
    companyName:"SLK" ,
    companyStrength:6000

})
/// Passing Array through Function//
const newArray=[100,300,500,200]// Array //

function SecondValueArray(getarray){
    return getarray[2]
}

console.log(SecondValueArray(newArray));


function thirdElement(elementarray){
    return elementarray[1]
}
// console.log(thirdElement(newArray));
console.log(thirdElement([100,200,500,600]));// output 200//

