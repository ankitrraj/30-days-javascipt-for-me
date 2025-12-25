// const { log } = require("node:console");


class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class admin extends User{
    constructor(username,email,phone_number){
        super(username)
        this.email =email
        this.phone_number = phone_number
    }

    phone_as_india(){
        console.log(`the number is ${"+91"+this.phone_number}`);
        
    }

}

const user_check = new admin("ankitrraj","Ankitraj@45.com","7683949578")

const Main_user = new User("ankit")
user_check.logme()
console.log(user_check);

// console.log(user_check instanceof User);
// console.log(admin == User);  //false

// console.log(user_check instanceof Main_user);






user_check.phone_as_india()