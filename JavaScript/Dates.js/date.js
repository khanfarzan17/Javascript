/* Dates */

let Mydate= new Date();
console.log(Mydate);
//////////////////////////////////////////////

console.log(Mydate.toString());//Output Fri Dec 15 2023 04:08:23 GMT+0000 (Coordinated Universal Time)
console.log(Mydate.toLocaleString())//Output 12/15/2023, 4:12:29 AM
console.log(Mydate.toLocaleDateString())// output 12/15/2023
console.log(Mydate.toISOString())//Output 2023-12-15T04:12:29.723Z
console.log(typeof Mydate);//output object

let myBirthday= new Date(2000,5,17)// Output for this  Sat Jun 17 2000//
console.log(myBirthday.toDateString());

let darshanBirthday= new Date(2001,1,7);
console.log(darshanBirthday.toDateString());//Output will be Wed Feb 07 2001//

let independenceDay=new Date(1947,7,15,0);
console.log(independenceDay.toLocaleString());//Output 8/15/1947, 12:00:00 AM //

/// Indian Calender Formt//

let todayDate = new Date(2023,11,15);
console.log(todayDate.toLocaleDateString());//output 12/15/2023//

/// TimeStamps in Javascript ///

let currentTimestamp= Date.now()
console.log(currentTimestamp);// output milliseconds//

console.log(todayDate.getTime());// output there will be slight Change//


/// To find a Specific Hours,Time, Months and Fullyear////
 let date=new Date()
 console.log(date);// it wont give you a precise date//
 console.log(date.getMonth())//output will be 11 0-11 this current month is December//
console.log(date.getDay())//output will be  5 today is  Friday //


