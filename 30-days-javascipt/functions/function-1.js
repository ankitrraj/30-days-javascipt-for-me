// functions
// function myfunc(a,b) {
//     console.log(a+b)
// }


function myfunc(a,b) {
    return a+b;
}

console.log(myfunc(4,98));

// myfunc(2,"4")


function islogged(username){// you have delcare the default value

    if(username === undefined){ // you alswo use !username
        console.log("please enter a username");
        
        

    }else{
    return `${username} ne login kar liya`
    }
}

console.log(islogged(""));


function swaptwonum(num1,num2){

    console.log(`before num-1 is ${num1} and num-2 is ${num2}`);
    
   num1 = num1 + num2
   num2= num1-num2
   num1 = num1-num2
    console.log(`after swap the num1 is ${num1}  and num2 is ${num2}`);
    
    
}


// console.log("hdu")
let num1 = prompt("enter the value of num1"); // the prompt is only using in web 
let num2 = prompt("enter the value of num2");
// in the terminal and compiler u use the readline
 

swaptwonum(num1 ,num2)

