// ff// const { log } = require("console");

const name  = "Ankit";
const MyGithubRepo = "20"

console.log(name + MyGithubRepo)

console.log(`my name is ${name} and my github repocount is ${MyGithubRepo}`);

const myGitHubID = new String("ankitrraj")
const mygit =new String("ankitrraj")
// console.log(myGitHubID);
// console.log(mygit);
// let new1=mygit.startsWith("ank")
// console.log(new1);

// console.log(new1.__proto__);


console.log(mygit.length);// length of chars
console.log(mygit.toUpperCase());// to all uppercase letter
console.log(mygit.charAt(0));
console.log(mygit.charAt("t"));// which index has to be character
// console.log(mygit.concat(""));// concat means add somethignafter this
// console.log(mygit.endsWith("an"))// when the strings end with __/
// console.log(mygit.includes("an")); // includes means the strings has to be hte letter
console.log(mygit.indexOf("t"));

const ankitname = "ankit-raj"
const ankitname1 = "ankitraj"

console.log(ankitname.substring(0,7));
console.log(ankitname1.substring(0,7));

console.log(ankitname.slice(-4,-2));
console.log(ankitname1.slice(-4,-2));

const newOne = "     ankit c      "
console.log(newOne.trimStart()); // trimstart has to remove the staring spaces
console.log(newOne);

const url = "https://newsdikhao.co.in"

const url1 =url.replace('news','ankit')
console.log(url1);

console.log(url.includes("news"));




console.log(ankitname.split("-"));
console.log(ankitname.bold("ankit"));
















