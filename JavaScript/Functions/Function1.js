/// Adding 2 number //
function addNum(number1,number2,sum){
  number1=12;
   number2=12;
  sum=number1+number2
  console.log(sum)
}
addNum();

//  Multiplication of 2 number//
function multiply(number3,number4){
    console.log(number3*number4);
}
multiply(10,4);

// otherWay to Dcalre and Define a function//

function substract(number5,number6){
    let result= (number5-number6);
    return result;
}

const result=substract(15,5);
console.log("Result", result);

// Rules in Function //
// after return we cannot print any thing///


function loginUser(username){
    return `${username} is logged in as User`
}
console.log(loginUser("Farzan"))
console.log(loginUser())// Undefined is logged in as user//


/// If in fucntion//

function signIn(username=""){
    if(username===undefined){
        console.log("Please enter username ")
        return

    }
    return `${username} is Signinned`
}

console.log(signIn("alok"))

function register(email){
 if(email === undefined){
    console.log("Enter a valid Email Address");
    return

 }
 return `${email} is used`

}
console.log(register("farzan@gmail.com"))