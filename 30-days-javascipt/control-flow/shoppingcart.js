//create a small shopping cart using reduce


const shoppingCart= [
    {
        item_name: "shoes",
        price : 2999
    },
    {
        item_name: "shirt",
        price : 699
    },
    {
        item_name: "jeans",
        price : 999
    },
    {
        item_name: "glasses",
        price : 299
    }
];

const alltotal =shoppingCart.reduce((acc ,item)=>(acc+item.price),0)
console.log(`your total shopping bill is ${alltotal}`);
