// const { get } = require("http")

class getuser_info{
    constructor(name,userid,password=14563){
        this.name = name
        this.userid = userid
        this.password = password

    }
    get userid(){
        return this._userid.toUpperCase()
    }
    set userid(val){
        this._userid = val
    }


}

const myclass = new getuser_info("here","asdghf")
console.log(myclass);
console.log(myclass.userid);


// geter seter using object 


const my_user = {
    _email : "sher@gmail.com",
    
    _password:"123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val

    }
}
const  teal  = Object.create(my_user)

console.log(teal.email);


