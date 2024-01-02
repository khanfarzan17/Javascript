/* How to make  Promise in JavaScript */
const promiseOne= new Promise(function(resolve,reject){
     // Do Async Task //
     // DB Call//
     //Cryptography//
     setTimeout(function(){
        console.log('Async Task  is being Started')
        resolve()
      
     },1000)
    

})

promiseOne.then(function(){
    console.log('Promise is being Consumed ')
})
