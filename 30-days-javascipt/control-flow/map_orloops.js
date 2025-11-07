// const valuesoflang = ["js","python"]
// const newfunc= valuesoflang.forEach( (rohit)=>{
//     console.log(rohit);
    
// })
// console.log(newfunc);


// use of filter 

const nums = [1,2,3,6,4,5,9,8,7]

// const newnums= nums.filter((num)=>num>4)// use defined the array of with () and {} this
// console.log(newnums);

// const newnums= nums.filter((num)=>{
//     num >4
// }) // this give a empty array becuase you open a scope {} as well=>

const newnums= nums.filter((num)=>{
    return num >4
})// when in the scope to return value to always use return keyword
console.log(newnums);

