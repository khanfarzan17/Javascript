///// High order Array Loop //
 // for of loop in JavaScript//

//  let newArray=[1,2,3,4,5,6,]

// for (const elements of newArray) {
//     console.log(elements);
    
// }

// let greeting="hello world"

// for (const greets of greeting) {
//     console.log(greets);
// }

///// Maps in JavaScript//

let map=new Map()// map does not contain any Multiple Entries//
map.set('In',"India")
map.set('US',"united States fo America")
map.set('Fr',"France")
map.set('In',"India")
// Applying for of loop on map//

for (const [key,value] of map) {
    
    console.log(key,':-', value)
}

