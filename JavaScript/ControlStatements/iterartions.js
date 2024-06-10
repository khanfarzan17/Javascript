// for loop//



for(let i=0;i<=10;i++){
    const element=i
    if(element == 5|| element == 7){
        console.log("5 is best element")
        console.log("7 is best Number")
    }
    console.log(element)
}

// Nested For loop//

for (let i = 1; i <=10; i++) {
  console.log(`the table of ${i}`)
  for (let j = 1; j <=10; j++) {
    
    console.log(i + '*' + j +'=' + i*j )
    
  }
    
}

// Accessing the Array in for loop//

let myArray=["Farzan","Souvik","Darshan","Jatin"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}
////// Key Words in JavaScript of For Loops/////////////
// continue and Break//
// Break is the key word which is being used when we need to jump//

for (let index = 1; index <=20; index++) {
  if(index== 5){
    console.log(`Detected  5`)
    break;//jumpin statement 
  }
  console.log(`value of index is ${index}`)
    
    
}

/// Continue Statement //
console.log('----------------------------------------------------------------------')

for (let index = 1; index <=20; index++) {
  if(index== 5){
    console.log(`Detected  5`)
    continue;//loop will not break loop it will continue//
  }
  console.log(`value of index is ${index}`)
    
    
}