// let a =123;
// const b =456;
var c =215;

if ( true ) {
    
    let a =123;
    const b =456;
     c =789;
}
// {} that is the scope
// console.log(a);
// console.log(b);
console.log(c);// because the c is givern output of the block scope its a problem


// +++++++++++++++++++++++++++++++++++++++++++++++

function okbyebye(){
    const username = "bhes"
    function nahibhaiye(){
        const meranaam = "Ankit"
        console.log(`my buffalo name is ${username}`);
        
    }
    // because is not in the scope 
    // console.log(`my name is the ${meranaam}`);
    nahibhaiye()
    
}
okbyebye()


if( true){
    const username = "bhes"
    if(username === "bhes"){
        const web = "newsdikhao.co.in"
        console.log(`my buffalo name is ${username}`);
        
    }
    // console.log(web);
    

}
// console.log(username);

console.log(addone(5));

function addone(num){
    return num +1;
}
// its call the delcration of function and get 
// name(5)
const name = function addone(num){
    return num +3;
}
