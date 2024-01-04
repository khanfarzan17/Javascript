function Setuser(userName){
    this.userName=userName;
}
function CreateUser(userName, email, password){
    Setuser.call(this,userName)
    this.email=email;
    this.password=password;
}

const userOne= new CreateUser("Farzan","farzankhan@gmail.com","7890");
console.log(userOne)



function vfislk(empName){
    this.empName=empName
}

function slk(empName,empId,role,Billable){
    vfislk.call(this,empName);
    this.empId=empId;
    this.role=role;
    this.Billable=Billable;

}

const commanEmploye=new slk ("Anup","113489","Software Engineer",true)

console.log(commanEmploye);