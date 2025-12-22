//   facing problem 

const my_name = "Ankit        "

console.log(my_name.length);
// console.log(my_name.trim().length);
// console.log(my_name.truelength);

//the problem we need whenever a page have a string with default sapes to remove but we dont use trim inall to we create solution

const my_arr = ["ankit","rohit"]

const names_obj = {
    AnkitIsActive :true,
    rohitIsActive : false,

    bothofactive: function(){
        console.log(`ankit is ${this.AnkitIsActive} or rohit is active ${this.rohitIsActive}`);
        // beause he say about current context to use this 
        

    }
}
// console.log(names_obj);
// console.log(names_obj.bothofactive());

// Array.prototype.ankit = function(){
//     console.log("ankit is in all array");
    
// }
// my_arr.ankit()

// Object.prototype.ankit = function(){
//     console.log("ankit is in all ");
    
// }
// names_obj.ankit()

//  inheritance

const user1 = {
    username: "ankit"
}
const user2 = {
    username: "rohit"
}
const user3 = {
    username: "sher"
}
const user4 = {
    username: "ankesh",
    __proto__: user3
}
// user1.ankit()

// console.log(user4.__proto__);
Object.setPrototypeOf(user1,user2)

String.prototype.truelength = function(){
    console.log(`truelength is :: ${this.trim().length}`);
    
}

my_name.truelength()
"ahsdhgfiusud hds dfs    fdhdf ".truelength()

