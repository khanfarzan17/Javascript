class User{
    constructor(userName){
        this.userName=userName;

    }
    loggme(){
       console.log(`Username is ${this.userName}`)
    }
      static createId(){
        return`569`
    }
}

const farzan= new User("farzan")
console.log(farzan.createId())

class Phone extends User{
    constructor(userName, phonemodel){
        super(userName);
        this.phonemodel=phonemodel
    }
}

const mobile = new Phone("kore","Iphone15")


console.log(mobile.loggme())
console.log(mobile.createId())