 // stack memory use in primitive data type
 // heap memory use in non primtive data type 

//  let Cont = "Ankit ";
//  let Acont = Cont;
//  Acont = "Rohit"
//  console.log(Cont);
//  console.log(Acont);
 //because he givern as copy he dosent change the value in non primptive data types 
 

 // now give example to non primtive 

 let ankit = {
    name : "Ankit",
    upi : "ankitraj@ybl",
    gmail : "ankitrajoria81@gmail.com"

 }

 let rohit = ankit;

 rohit.gmail = "rohitsimar1906@gmail.com"

 console.log(ankit.gmail);
 console.log(rohit.gmail);
 