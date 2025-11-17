const mynums = [1,2,3,4,5,6,7,8,9,10]


// // const newNums = mynums.map((num)=>   {return num+10 })

// // console.log(newNums);
//  const result= []

//  mynums.forEach((num) =>(result.push(num+10)))
//  console.log(result);
 


//  function add10(){
//     for (let index = 0; index < mynums.length; index++) {
        
//         console.log(mynums[index] +10);
        
//     }
//  }
//  console.log(add10());

// chaining 

const newNumschain = mynums
                    .map( (num) => num*1000 )
                    .map((num)=> num+11)
                    .filter((num)=>num<=5000)

console.log(newNumschain);

 























































// const sher = 10

// function add10(){
    
//     for (let index = 0; index < mynums.length; index++) {
//         const num1= mynums*10
//         console.log(num1);
        
        
        
    
//     }
// }
// console.log(add10())


// const newNums1= mynums.forEach((num)=> {

//     const where= num+10
//     return where
// })

// console.log(newNums1);
// // console.log(mynums);

