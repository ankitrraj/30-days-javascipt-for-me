// delcare a singelton object 
// const newobj = new Object()  

const newobj = {}

newobj.id = 9027
newobj.email = "ankitrajoria81@gmal.com"
newobj.class = "BCA 2nd Year"

// console.log(newobj);

// now create object in object in object 

const ankitobj = {
    name : "ankit",
    class : "BCA 2nd year",
    classfriend : {
        firstfriend : "rohit kumawat",
        sceondfriend : "devansh",
        thridfriend : "uttam",
        thebrother : {
            brother : "rohit choudhary",
            anotherbrother : "ankit"

        }

    }

}
//  get the object output
// console.log(ankitobj.classfriend.thebrother.brother);

//noe learn about to the merge the obj 

const obj1 = {1: "A" , 2 : "B"}
const obj2 = {3: "C" , 4 : "D"}
const obj3 = {4: "F" , 5 : "E"}


// method 1
// the method 1 create a problem because the problem is create in the frist obj to under the second obj 
const obj5 = {obj1,obj2,obj3}
console.log(obj5);


// method 2
const obj4 = Object.assign( {},obj1,obj2,obj3) // we use delcared and target with help of ( {} , targets)
console.log(obj4);

// method 3 (spread method )

// best approach 
const obj6 = {...obj1 , ...obj2 , ...obj3}
console.log(obj6);



