const Balance=2700

if(Balance<500){
    console.log("Balnace is more than 500")
}
else if(Balance<750){

    console.log("Balance is more than 750")
}
else if(Balance<1000){
    console.log("Balance is more than 1000")
}
else{
    console.log("Balanace is more than 1500")
}

/// AND Condition Cheack ///

const creditard=true
const userLoggedIn=true
const LoggedInfromGoogle=false
const LoggedInfromEmail=true
if(userLoggedIn && creditard && LoggedInfromGoogle){// && AND //
    console.log("The user can use Credit card ")
}

if(LoggedInfromGoogle || LoggedInfromEmail){// use for cheacking Multiple Condition//
    console.log("User can Log IN ")
}