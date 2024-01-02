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


// Important Note :The resolve function transitions the Promise from the "pending" state to the "fulfilled" state///


 new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Hello there Promise is being Created ")
        resolve()
    },2000)
}).then(function(){
    console.log('Promise is being used')
})

const promiseThree= new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"Farzan", emailId:"xzy@gmail.com",employeeId:"3456"})
    },1000)
}).then(function(userdata){
    console.log(userdata)
})

const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
        resolve({userName:"farzan", passWord:"dash@1234"})
    }
    else{
        reject('Error:Something Went Wrong')
    }
  },2000)
})
promiseFour.then((user)=>{
    console.log(user)
    return { userName: user.userName, passWord: user.passWord };
   
}).then((credentils)=>{
    console.log(credentils.userName)
    console.log(credentils.passWord)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log(' Finally the Promise is Being Either Resolved or Rejcted ')
})

const promiseFive= new Promise((resolve,reject)=>{
   let error=true;
   if(!error){
    resolve({userNmae:"ALok", passWord:"67890"})
   }
   else{
    reject('Error: Page  not Found')
   }

},2000)

async function ConsumePromiseFive(){
 try {
   const response=await promiseFive
   console.log(response)
    
 } catch (error) {
    
    console.log(error)
 }

}
ConsumePromiseFive()


async function getallUsers(){
   try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
     const metaData=await response.json()
     
     console.log(metaData)
   } catch (error) {
     console.log('Error:Data Not found', error)
   }
  

   
}

getallUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
   return response.json()
}).then((metadata)=>{
    console.log(metadata)
}).catch((error)=>{
    console.log('Error Something Went Wrong :' ,error)
}).finally((result)=>{
    console.log("Either the Response is being Success or Failed ",result)
})