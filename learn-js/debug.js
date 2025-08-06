console.log("first")
console.log("second")
console.log("third")

function findSum(a,b){
    let sum=a+b;
    return sum;
}

function findProduct(a,b){
    let product=a*b;
    let sum=findSum(100,200)
    return product+sum;

}

console.log(findProduct(1,2))
