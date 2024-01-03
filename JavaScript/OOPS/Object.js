function multiplyby5(num){
  
    return num*5
}
multiplyby5.power

console.log(multiplyby5(5));

function createEmployee(empID,empName,empDesigination,empSalary){

    this.empID=empID;
    this.empName=empName;
    this.empDesigination=empDesigination;
    this.empSalary=empSalary;

}

createEmployee.prototype.Increment=function(amount){
    this.empSalary+=amount
}

createEmployee.prototype.printMe=function(){
    console.log(`The Employee ID is ${this.empID} and the Name of the Employee is ${this.empName} and 
     salary is ${this.empSalary}`)
}

const Alok= new createEmployee("123","ALOK","Software Engineer",25000)
const Aman= new createEmployee("456","Aman","Devops Engineer",50000)

Alok.printMe()
Aman.printMe()

Alok.Increment(40000)
Alok.printMe()


/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function Dog(name,age){

    // this refer to create a new object//
    this.name=name;
    this.age=age;

}

let mydog= new Dog("SAM",8)
// Dog constructor set Nmae and Age//

console.log(mydog.name)

//The new object (representing the dog named "SAM") is returned when the new Dog(...) expression is evaluated//


