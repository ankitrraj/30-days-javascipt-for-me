const theinput   = document.getElementById("inputtype")

theinput.addEventListener("keypress",()=> {
    if(event.key == "Enter"){
        // document.body.style.backgroundColor = "green"
        const create_element = document.createElement("div")
        let saveto_array = create_element.innerHTML = theinput.value;

        create_element.style.backgroundColor = "red"
        create_element.style.borderRadius = "45px"
        create_element.style.height = "45px"
        create_element.style.width = "145vh"
        create_element.style.fontSize= "25px"
        create_element.style.padding= "10px 3px 3px 45px"

        let itemarray = []
        itemarray.push(saveto_array)

        console.log(itemarray);
        


        
        

        

        document.body.appendChild(create_element)

        

        // console.log(create_element);
        
        




        // itemarray.push("sher")
        // console.log(itemarray);

        
    }

})