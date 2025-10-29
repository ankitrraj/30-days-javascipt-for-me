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
