// Using ES6 class syntax
class User {
    constructor(UserName, age, email, gender, passWord) {
        this.UserName = UserName;
        this.age = age;
        this.email = email;
        this.gender = gender;
        this.passWord = passWord;
    }

    encryptPassword() {
        return `${this.passWord}***abc`; // Corrected the method
    }

    uppercase() {
        return `${this.UserName.toUpperCase()}`;
    }
}

const NewUser = new User("farzan", "23", "farzan@gmail.com", "Male", "5679");

console.log(NewUser.encryptPassword());
console.log(NewUser.uppercase());

/* Behind the scenes using functions */
function user(UserName, age, email, gender, passWord) {
    this.UserName = UserName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.passWord = passWord;
}

user.prototype.encryptPassword = function () {
    return `${this.passWord}***xyz`; // Corrected the method
};

user.prototype.uppercase = function () {
    return `${this.UserName.toUpperCase()}`;
};

const UserTwo = new user("ALOK", "22", "singhalok@gmail.com", "Male", "456783");

console.log(UserTwo.encryptPassword());
console.log(UserTwo.uppercase());
