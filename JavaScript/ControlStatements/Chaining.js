/// Chaining in JavaScript is the practice of calling multiple methods on an object //

let number=[1,2,3,4,5,6,7,8,9,10,11]

let newnums=number
.map((num)=>num*2)//[ 2,  4,  6,  8, 10,12, 14, 16, 18, 20,22]//
.map((num)=> num+1)//[3,  5,  7,  9, 11,13, 15, 17, 19, 21,23]//
.filter((num)=> num>20)//[ 21, 23 ]

console.log(newnums);