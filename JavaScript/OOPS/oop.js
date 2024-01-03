/* Creating a Structure  for user */

function User(userName,loggedIn, loggInCount, gender, age,Country, State, city, District, EmailAddress, CurrentAddress, PermanentAddress,Phonenumber ){
    this.userName=userName;
    this.loggedIn=loggedIn;
    this.loggInCount=loggInCount;
    this.gender=gender;
    this.age=age;
    this.Country=Country;
    this.State=State;
    this.city=city;
    this.District=District;
    this.EmailAddress=EmailAddress;
    this.CurrentAddress=CurrentAddress;
    this.PermanentAddress=PermanentAddress;
    this.Phonenumber=Phonenumber;
    this.greeting=function(){
        console.log(`Welcome to our Web App ${this.userName}`)
    }

  return this 
}



/* WhenEver we use new KeyWord an Empty instance or object is being created */
const userOne = new User(
    "JohnDoe",
    true,
    5,
    "Male",
    25,
    "USA",
    "California",
    "Los Angeles",
    "Some District",
    "john.doe@example.com",
    "123 Main St",
    "Permanent St",
    "123-456-7890"
);

const userTwo = new User(
    "JaneSmith",
    true,
    8,
    "Female",
    30,
    "Canada",
    "Ontario",
    "Toronto",
    "Downtown District",
    "jane.smith@example.com",
    "456 Oak St",
    "Maple St",
    "987-654-3210"
);







console.log(userOne)