import readline from "readline";// readline is used for terminal input in ts 
import { isJSDocNameReference } from "typescript";

 
//const readline = require("readline");


interface user {
    idname: string;
    email: string;
    name: string;
    role: string;
    hospital_id: number;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter your id name ", (idname) => {
    rl.question("enter your email ", (email) => {
        rl.question("enter your name ", (name) => {
            rl.question("enter your role ", (role) => {
              rl.question("enter hospital id ", (hospital_id) => {

                    const newuser: user = {
                        idname,
                        email ,
                        name ,
                        role,
                        hospital_id: Number(hospital_id)


                    };
                    console.log(" code run succesfully");
                    console.log(newuser);

                    rl.close();


                })
            })

        })

    })

})


// interface appointment {
//     id : string;
//     email : string;
//     docter_id : string;
//     date : string;
//     status :boolean;
//     notes? : string;

// }

// const newuser: user = {
//     idname: "ankitrraj",
//     email: "ankitrajoria81@gmail.com",
//     name: "ankit",
//     role: "developer",
//     hospital_id: 56



// };
