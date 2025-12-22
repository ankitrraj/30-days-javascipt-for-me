function setuser(username){
    this.username =username


}

function createuser(username,email,password){
    setuser.call(this,username)
    this.email =email
    this.password = password
}

const chai =  new createuser("ankit","@gmai.com","897")
console.log(chai);

