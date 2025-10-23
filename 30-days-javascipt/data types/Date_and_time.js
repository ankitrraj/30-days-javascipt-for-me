import { log } from "console";

let mydate = new Date(2000,11,23);

// console.log(mydate.toString());

// console.log(mydate.toISOString());

// console.log(mydate.toJSON());

// console.log(mydate.toLocaleDateString());// its define a real normal date type for normal use o/p =>22/10/2025

// console.log(mydate.toLocaleTimeString());  //its for use to know current time 

// console.log(mydate.toLocaleString()); 

/*
found a new concept when you using date months in js to it start at 0 to 11  jan to dec 
*/


// as your usecase to use us dat mm/dd/yyyy  and use india  dd/mm/yyyy for in " " doucle codes in Date

let tarikh = new Date()
// console.log(Math.floor(Date.now()/1000))
console.log(

tarikh.toLocaleString('default' ,{
    minute : "numeric",
    second : "2-digit",
    weekday : "long",
    day : "2-digit"
})
);



// console.log(tarikh);
// console.log(tarikh.toString());
// console.log(tarikh.getTime());


// let aaj = Date.now();
// console.log(aaj);


