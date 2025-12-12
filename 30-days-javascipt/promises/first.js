

const promis = new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("sher ban gaya ");
        resolve()



    }, 2000)

})

promis.then(() => {
    console.log("async is complete ");

})


new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("sherrrrrrrrrrrrrrrrrrrr");
        resolve()

    }, 3000)

}).then(() => {
    console.log("bhai ye 2 nd bhi chal gaya");

})

// promise 3

const thirdpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false

        if(!error){
            resolve({name : "ankit" , email : "email@example.com"})

        }
        else{
            reject("error something wrong")
        }

        
    },4000)
})

thirdpromise.then((superman)=>{
    console.log(superman);
    // console.log(superman.name);
    return superman.name
    

}).then((name)=>{
    console.log(name);
    
}).catch((e)=>{
    console.log(e);
    
})

// promises with async await

const fourpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true

        if(!error){
            resolve({name : "ankit" , email : "email@example.com"})

        }
        else{
            reject("error something  in four wrong")
        }

        
    },4000)
})

async function promisback() {

    
    try {
        const promiseshandle = await fourpromise
        console.log("yes i did it ");

    }
    catch (e){
        console.log(e);
        
    }
    
    
}
promisback()




// now we createe req,res 

// then catch method 

// fetch("https://api.github.com/users/ankitrraj").then((r)=>{
//     return r.json()
// }).then((recived_reutrn)=>{
//     console.log(recived_reutrn);
    
// }).catch(()=>{
//     console.log("something went wrong");
    
// })

// async await
async function rsponse() {

    // for handling erro we use try or catch 
    const Response = await fetch('https://api.github.com/users/ankitrraj')

    const result = await rsponse.json()  // because the converstion response take time to we  await in [parsing json]

    console.log(result);
    

    
}


