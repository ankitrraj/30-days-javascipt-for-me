

const mysymbol = Symbol("mysym")
// console.log(typeof mysymbol);

const myobj = {
    name : "Ankit",
    age : 18,
    class : "BCA 2nd Year ",
    email : "ankitrajoria@gmail.com",
    "full name" : "ankit rajoria",
    isLoggedIn : true,
    LastLoginDays : [ "monday ", "tuesday ", "saturday"],
    // [mysymbol] : "mysym",
    //when you try to know this mysymbol type to its output is a string because you have demand to typeof the value in behind the seen he like this mysymbol(mysym ): "mysym" 
    // when you need to the output is symbol to the value is always a symbol
    [mysymbol] :Symbol("mysymbolisnow")

}

// console.log(myobj.name);
//and a another beat approach to get the values in the obj 
// console.log(myobj["name"]);
// console.log(myobj["email"]);
// console.log(myobj["full name"]);// and a another thing when u delcare a obj value in " " codes to iunsure the all the spaces count in the "" codes

// console.log(typeof myobj[mysymbol]);
// console.log(myobj[mysymbol]);


myobj.email = "ankit@google.com"
myobj.email = "ankit@chatgpt.com"  

// console.log(myobj["email"]);
// Object.freeze(myobj);
// myobj.email = "ankit@chatgpt.com"
// console.log(myobj);
// myobj.email = "ankit@chatgpt.com"  

myobj.greeting = function(){
    console.log("heloo its me");

}
console.log(myobj.greeting());

myobj.greeting = function(){
    console.log(`heloo its me , ${this["full name"]}`);

}
console.log(myobj.greeting());








