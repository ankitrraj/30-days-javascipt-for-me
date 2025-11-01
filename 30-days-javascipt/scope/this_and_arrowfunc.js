//   const username = prompt("enter the username")
  
  const user ={
     username :  "ankit" ,//prompt("enter the username"),
    email: "ankit@google.com",
    Dashboardname : function showindashboard(){
        console.log(`${this.username} , welcome to WITHCARING`);
        
    }

    
  }
  user.Dashboardname()
//   console.log(user);


// const user1 = function (){
//     let username1 = "ankti"
//     console.log(this); this.username1
    
// };

const user1 =  ()=>{
    let username1 = "ankti"
    console.log(this);
    
};
user1()

const addtwo = (num1,num2)=> {
    return num1+num2
}
console.log(addtwo(7,5));

// implicit return
const addtwo2=(num1,num2) => num1+num2
console.log(addtwo2(7,5));

const add = (num1,num2) => { username4 : "ankit"}
console.log(add());


  