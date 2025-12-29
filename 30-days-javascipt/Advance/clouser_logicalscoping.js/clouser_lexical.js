// clousers  and lexical scoping 

function  hey_clousers(){
    const name  = "ankit"
    function heygetname(){
        console.log(name);
        
    }
    heygetname()
}

hey_clousers()