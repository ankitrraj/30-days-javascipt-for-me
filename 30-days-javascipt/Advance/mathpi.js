console.log(Math.PI);

const checkpi = Object.getOwnPropertyDescriptor(Math , "PI")

console.log(checkpi);

/*
{
  value: 3.141592653589793,
  writable: false,  // there is  an default math pi property to this resaon to we do not change this
  enumerable: false,
  configurable: false
}

*/

let myobj = {
    name : "ankit",
    class :" bca 2nd year",
    enroll : 9027
}

// const check_my_obj = Object.getOwnPropertyDescriptor(myobj) // that only refernce no the property 
const check_my_obj = Object.getOwnPropertyDescriptor(myobj, "name") // that only refernce no the property 

console.log(check_my_obj);


// Object.defineProperty(myobj , "name", {
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(myobj, "name")) // that only refernce no the property 

for (let [key ,value] of Object.entries(myobj)) {
    console.log(key,value);
    
    
}


