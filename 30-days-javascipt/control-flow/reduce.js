const mynums= [1,2,3,4]

// second method to intialzew acc value

// const accvalue = 0

// const storenums = mynums.reduce(function (acc,cureentvalue){

//     console.log(`the acc is : ${acc} and curval is ${cureentvalue}`);


//     return acc + cureentvalue

// },0) // the one method to give accumaultor of (acc) value is ,0 after "}"
const storenums = mynums.reduce((acc ,curval) => acc +curval,0)
console.log(storenums);



