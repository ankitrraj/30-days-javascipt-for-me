// what is this and object literral 

// const { futimesSync } = require("fs");
// const sher = 35

const my_obj = {
    username: "ankitrraj",
    useremail: "ankitrajoria81@gmail.com",
    userlogginCOunt: 13,

    say_hi: function () {
        console.log(`hey how arr you`);
        console.log(`hey how arr you ${this.username}`);
        console.log(this);
    }
}
console.log(my_obj.useremail);
// console.log(my_obj.say_hi());
console.log(this);


