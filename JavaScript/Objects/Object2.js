const tinderUser={}
tinderUser.Id="123Abc"
tinderUser.Name="Souvik"
tinderUser.age=23,
tinderUser.Status="Single"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

// Object inside Object//
const newUser={
    FullName:{
        userFullname:{
            firstName:"Farzan",
            lastName:"Khan"
        }
    }
}

//console.log(newUser.FullName.userFullname.firstName);

// Merge 2 Objects//



const obj1 = { name1: "Farzan", age1: 22 };
const obj2 = { Name: "Souvik", age2: 24 };

const obj3={...obj1,...obj2};// spread //
//console.log(obj3);
/// When the Data comes form the Database//
// Here we will get Array of the Objects//

const arrayObject=[
    {
        id:123,
        name:"Farzan",
        Desigination:"Software Trainee"
    },
    {
        id:456,
        name:"Souvik",
        Desigination:"Software Trainee"
    }
]
// console.log(arrayObject);
// console.log(Object.keys(arrayObject))
// console.log(Object.values(arrayObject))
//console.log(Object.entries(arrayObject))
console.log(arrayObject.hasOwnProperty('name'))

const student={
    RollNo:12,
    Name:"Alok",
    Standard:5,
    Address:"HBR LAYOUT ",
    State:"Karnataka"
}
console.log(student.hasOwnProperty('RollNo'))
