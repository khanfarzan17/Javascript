class user{
    constructor(userName){
        this.userName=userName;
    }

    isloogin(){
        return `${this.userName} is loggin Currently`
    }
}

class Teacher extends user{
    constructor(userName,age, gender, experence){

     super(userName);
      this.age=age;
      this.gender=gender;
      this.experence=experence;
    }
    subjects(){
        return`${this.userName} teaches Subjects`
    }
}

const professor= new Teacher("vinay ","22","Male","2 years")

console.log(professor.isloogin());
console.log(professor.subjects())
console.log(professor);