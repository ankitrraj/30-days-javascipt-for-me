// Immediately Invoked function expression (iife)

//why i use iife
// iife help to ingroe global scope variable pollution to fast loading 

(function ankitraj (){
    console.log(`🎶DB connected `);
    
})();

// (  () => {
//     console.log(`🤣DATABASE HAVE A GIRLFREIND`);
    
// })();

(  (name) => {
    console.log(`🤣DATABASE HAVE A GIRLFREIND ${name}`);
    
})("Ankit");
