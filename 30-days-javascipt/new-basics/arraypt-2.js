const firstarray = ["ankit","rohit","uttam"];
const secondarray = ["rajoria" , "choudhary" ,"jangir"];

// firstarray.push(secondarray)//its connect the array to a another 4 elements and add it in the array

const concatmethod = firstarray.concat(secondarray)//he adds only to array 
// spread  approach is the best for this 
const useofspread = [...firstarray, ...secondarray]; //thsi use to add all the arraay to the spread approach is best 

console.log(concatmethod);

let arrayarray= [1,2,3,[4,5],6,[34,23,2,[23,12]],455];

console.log(arrayarray.flat(2))// use infinity as well


console.log(Array.isArray(arrayarray))//he checks the variable is array or not  []
console.log(Array.from("ankit")) //conver to array

// if you want to this return a array to use object ,keys or values , entries 
console.log(Array.from({
    name:"ff" ,
    anothername : "asdfh"

}) )//he gives a emty array becasue he dosent to make the keys to array or values to array

