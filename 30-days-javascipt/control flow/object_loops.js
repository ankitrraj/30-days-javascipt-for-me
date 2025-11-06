const myobj= {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift"

}

// for (const key in myobj) {
//     console.log(myobj[key]);
    
    
// }
for (const key in myobj) {
    console.log(`the ${key} is used for the ${myobj[key]}`);
    
}

// for (const [key,value] of myobj) {   //becauese the object is not woking in this of loop
//     console.log(myobj[key,value]);
    
// }

const myarraay = ['rohit','ankit' ,'uttam']

for (const key in myarraay) {
    console.log(key);
    
}