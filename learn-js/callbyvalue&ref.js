let a=10;

//call by value
function incrementA(x){
    x++;
    console.log("value of x is ",x)
}

incrementA(a)
console.log("value of a is ",a)


//call by ref
let product={
    pid:111,
    name:'telivision'
}


function changeProduct(pr){
    pr.name='washing machine';
    console.log("pr name is ",pr.name)
}

changeProduct(product)

console.log("product name is ",product.name)