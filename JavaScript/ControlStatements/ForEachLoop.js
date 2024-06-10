// Foreach  is being used  for Call Back Function//
let myArray=[12,3,4,56,7]

myArray.forEach(function(myArray){
    //console.log(myArray)// in call Back function Function dont have its Name//
})



let SuperHero=["flash","Batman","Superman","Hulk"]

SuperHero.forEach(function(rou){
console.log(rou)
})

let anuj=["34","Hello ","How are you"]

anuj.forEach(item => console.log(item))// Arrow Function IN FOR EACH LOOP//

//////////////// Using forEach by uaing its refernce in javaScript //////////////////////////

let alok=["Satyam ", "Intekhab","Tarique","Shourya"]

// alok.forEach(item => console.log(item))
console.log("-===========================================================")

/// now by using refernce//

function pgMates(how){
console.log(how);
}
alok.forEach(pgMates)

///////////////////////// How acces in objects in JSON Format/////////////////////

let Myoffice=[

    {
        SlKclient:"Emerson ",
        SlkTeam:" EMR"
    },
    {
        SlKclient:"Fifth Third Bank",
        SlkTeam:"five3"
    },
    {
        SlKclient:"Regions Bank ",
        SlkTeam:"CBU Buffer"
    }
]

Myoffice.forEach(function(item){
    console.log(item.SlKclient)// normal Function //
})
Myoffice.forEach((item)=>{
    console.log(item.SlkTeam)// Arrow Function  in javScript//
    
})