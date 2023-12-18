// Object Literals//

const Jsuser={
    name:"Farzan",
    age:22,
    salary:15000,
    "Full name":"Farzan Ateeque Khan",
    email:"khanfarzan@google.com",
    

}

console.log(Jsuser.name);/// This is the way to Access the  Objects//
// Objects are being in key value //
console.log(Jsuser["Full name"])// Other way to Access the Objects Property//


/* Symbol Data Type in Objects */

const mySym= Symbol("helllo")

const slkUser={

    [mySym]:"hello"

}

//console.log(slkUser.mySym);
//console.log(typeof slkUser.mySym);// Now it giving the datatype is as String //
console.log( slkUser[mySym]);// Now it being Accessed by Symbol //
console.log(typeof slkUser[mySym]);

// change the Value of the Objects//
Jsuser.email="aloksingh@google.com";

//console.log(Jsuser.email);// the  value of the Email is being Chnaged//


// How to Freeze the Acess and Changes//

//Object.freeze(Jsuser);
Jsuser.name="Alok";
Jsuser.salary=34000;
Object.freeze(Jsuser)// no changes is being Applied 
Jsuser.salary=23000;
Jsuser.name="Darshan"
