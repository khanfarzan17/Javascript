///////////////////////IIEF//////////////////////
//It stands for Immediately Invoked Function Expressions//
(function Chai(){
    console.log(`DB Connected `)
})();///  Named IIFE//

// We use Immdiately Invoked Function Expression because to avoid Global Scope Pollution Problem//
( (name)=>{// simple IIEF with Parameter Passing//
console.log(`Db context ,${name}`)
})('souvik');

// We need to give Semi Colon when the IIEF is getting over//

(function arun(){
    console.log("Happy BirthDay")
})();

(()=>{
    console.log("alok is Noob")
})()
