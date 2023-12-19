// Truthy value in JavaScript//
let UserEmail=""

if(UserEmail){
    console.log("User is Logged IN")
}
else{
    console.log("User is not being logged In")
}

//// all the Truthy and Falsy Value in JavaScript//

// Falsy values/////////////////////////////////////////////////////////
if (false) {
    console.log('This will not be executed.');
  }
  
  if (0) {
    console.log('This will not be executed.');
  }
  
  if ('') {
    console.log('This will not be executed.');
  }
  
  if (null) {
    console.log('This will not be executed.');
  }
  
  if (undefined) {
    console.log('This will not be executed.');
  }
  
  if (NaN) {
    console.log('This will not be executed.');
  }
  

  // Truthy values///////////////////////////////////////////////////
  if (true) {
    console.log('This will be executed.');
  }
  
  if (42) {
    console.log('This will be executed.');
  }
  
  if ('Hello') {
    console.log('This will be executed.');
  }
  
  if ([]) {
    console.log('This will be executed.');
  }
  
  if ({ key: 'value' }) {
    console.log('This will be executed.');
  }
  
  if (function() {}) {
    console.log('This will be executed.');
  }
  if("0"){
    console.log('this will be Executed')
  }
  //// Nullish 

  let val1;
//   val1=10??20??34
//   val1=undefined??10

val1=null??10??11

  console.log(val1);