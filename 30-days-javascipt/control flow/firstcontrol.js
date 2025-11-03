// now i talk about to flow global scope and functional scope 

const name = "ankit"
const age = 20

if (age ==20) {
    const ankit = "rohit"
    console.log(`rohit is also a ${ankit}`);
    
    
   
    
    
}
// because it is not in the scope the variable ankit is in functional scope not in a global scope so its make a error
//  console.log(`rohit is also a ${ankit}`);

//===============================================
// truthly values 
const user = []
const user2 ={}
if (user.length===0) {
    console.log("array is empty");
    
    
}
if (Object.keys(user2).length===0) {
    console.log("Object is empty");
    
    
}

