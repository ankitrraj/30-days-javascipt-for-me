// const { log } = require("console");
// const { use } = require("react");

 function multi5(num){
    return num*5

 }
multi5.power =768
 console.log(multi5(8));
 console.log(multi5.power);
 console.log(multi5.prototype);

 function createuser(username,enrolnum){
    this.username = username
    this.enrolnum = enrolnum
 }
 createuser.prototype.increment = function(){
    this.enrolnum++
 }
 createuser.prototype.printMe = function(){
    console.log(`hey the enroll num is ${this.enrolnum}`);
    
 }
 const chai  = new createuser("ankit",27)
 const tea  = new createuser("rohit",19)

 chai.printMe()
