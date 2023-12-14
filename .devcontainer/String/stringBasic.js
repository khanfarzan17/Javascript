const name="Farzan";
const Repository=50;

console.log(`my name is ${name} in my Githb i have  ${Repository} Repository `);


const comapnayName=new String('   SLKSoftware   ');
console.log(comapnayName);

console.log(comapnayName[4]);//TO check the the index Position of the Character in the String //
console.log(comapnayName.length);// To cheack the lenght of the the String//
console.log(comapnayName.toUpperCase());// TO change the String in the Uppercase//
console.log(comapnayName.toLowerCase());// To change the string in the Lower Case//
console.log(comapnayName.charAt(4));// To cheack which character is present a that Positon//
/* Difference betweeen Substring and Slice is that 
in slice we can give Negative Positions but in Substring there is no Neagative postions */
console.log(comapnayName.substring(0,6));
console.log(comapnayName.trim());

/* String Replacement in Javascript 
Browser Does not understand the Empty spaces so where there is any space left Javascript
will convert it in url fetch */

const address="https://www.codewithharry.com/tutorial/js-class/"

console.log(address.replace('harry','farzan'));// String Replacement  method///

// to cheack keyword in string is presnet in the String//

console.log(address.includes('harry'));








