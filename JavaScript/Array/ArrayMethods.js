/* In Javascript Array is being Defined as the Storing of Differnt Element in same Variable
In JS array are resizeable 
*/
// const myArray=[0,1,2,3,4,"Farzan",true];
// console.log(myArray);
// console.log(myArray[2]);//Array indexing//

 //const arr2=new Array(1,2,3,4);// other way to Declare a Array//
// console.log(arr2);

/* Methods of Array in JavaScript */

const newArr=[0,2,3,4,5,6,7]//Push method add new element in the Existing Array//
// newArr.push(11,90);
console.log(newArr);

// POP method does not contain any Argument , it just remove the last Element  from the Array//
newArr.pop();
console.log(newArr);// 90 is being Removed from the Array//

//Unshift and Shift Methos in Array//

// newArr.unshift(12);
// console.log(newArr)

// newArr.shift();
// console.log(newArr);

//includes is to cheack whether a Particular Element is being Present or Not//

console.log(newArr.includes(9));// False as 9 is not Present in the Array//

// Index Methods //
console.log(newArr.indexOf(2));
//Join method i Array Bind two Array and Convert it into String//
// Slice and Splice Method in JavaScript//

// SLice Example in JavaScript //

const originalArray=[1,2,3,4,5,6];
const slicedArray= originalArray.slice(1,3);// excluding 3//
console.log(slicedArray);
console.log(originalArray);

//Splice Example in Javascript//

const meta=[1,2,3,4,5];
const splicedArray=meta.splice(1,2,67,90);
console.log(meta);

/* The Main Difference between Slice and Splice 
1)In slice last Range doet not Include (1,3)// 3 is not being included 
2)In Slice the original Array is being Remained Unchanged but In splice the Original
array is being Manipulated */

//lenght of hte Array//
console.log(meta.length);

//  PUsh , Concat and Spread//

const marvelHeros=["Ironman", "SpiderMan ","thor"]
const dcHeros=["batman","flash","wonderwoman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);// By using Push between we will create a array in side Array//

// const allHeros=marvelHeros.concat(dcHeros);
// console.log(allHeros);// It good but what if we have more arrays//
// Spread Method in Array //

const universalHeros=[...dcHeros,...marvelHeros];
console.log(typeof universalHeros);// object
console.log(universalHeros);


//// FLat method in Array JavScript//
 const anotherArray=[1,2,3,4,[12,3,4],[2,5,6,78,90,[23,4,5,6,1],34,5,6]];
 /*output [
  1, 2, 3,  4, 12,  3, 4,
  2, 5, 6, 78, 90, 23, 4,
  5, 6, 1, 34,  5,  6
]*/

 const flatedArray= anotherArray.flat(Infinity);
 console.log(flatedArray);









