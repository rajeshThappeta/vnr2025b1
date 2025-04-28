//FUNCTIONS IN JAVASCRIPT
//Camelcase(lower & Upper)
//  findSum , findSumOfTwoNumber  find_sum_of_two_numbers



//Function declaration(function statement)
function findSum1(a, b) {
    return a + b;
}

//call
let sum1 = findSum1(10, 20)
console.log(sum1)


//Function expression
let findSum2 = function (a, b) {
    return a + b;
};

//call
let sum2 = findSum2(10, 20)
console.log(sum2)



//Arrow function (simplify function expression)
let findSum3 =  (a, b)=>  a + b;

//call
let sum3 = findSum3(10, 20)
console.log(sum3)


//find big
let findBig1=function(a,b){
    if(a>b){
        return "a is big"
    }else{
        return "b is big"
    }
}

let findBig2=(a,b)=>{
    if(a>b){
        return "a is big"
    }else{
        return "b is big"
    }
}