const ott={
    userName:"farzan",
    Age:22,
    price:500,

    WelcomeMeassage:function(){
        console.log(`welcome, ${this.userName}  your age is ${this.Age} and Subscription charge is ${this.price}`)
    }
}

 console.log(ott);// context is not Being Changed//
 ott.WelcomeMeassage();
/////////////////////////////////////////////////////////////////////////////////
ott.userName="Alok Singh"
ott.Age=45
ott.price=450
console.log(ott)// Contex is Being Changed//
ott.WelcomeMeassage();
console.log(this)// current context is Empty//


// /////////////////////Arrow Function in JavaScript///////////////////////////////////////////
// function chai(){
//     let uName="Sahil"
//     console.log(this.uName)  () => {}
// ()//
// }
// chai()

const chai = ()=>{// Arrow Function 
    let profile="Sahil"
    console.log(this.profile)

}

chai()


 const add=(num1,num2) =>{
  return num1+num2
}

console.log(add(3,3));// output 6

const div=(num3,num4)=>{
    return num3/num4// Explicit Return//
}
console.log(div(30,2));// output 15


const plus=(num5,num6)=>(num5+num6)// Implicit Return //

console.log(plus(3,5))


//// normal function
function mul(num9,num10){
   console.log(num9*num10)
}
mul(10,10);