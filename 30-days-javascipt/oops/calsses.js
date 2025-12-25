

class USER{
    constructor(username,email,password){ //consrtuctor when call then you create a new object 
        this.username =username  //injection the referce off  this.username like a variable and user name has actual value
        this.email = email  // this.email like object proopery  and email is parameter
        this.password =password
    }

    gottoencrypt() {
        return `${this.password}5656`

        
    }
}

const user_info = new USER("ankit","Ankit@google.com","Ankit")

console.log(user_info.gottoencrypt());
console.log(user_info);


function get_user(username,email,password){
    this.username = username
    this.email =email
    this.password = password

}

get_user.prototype.getpassstrong =  function (){

    return `${this.password}5656`
    
}

const create_obj = new get_user("ankit","rohit@gmail.com","Ankit")

console.log(create_obj.getpassstrong());
