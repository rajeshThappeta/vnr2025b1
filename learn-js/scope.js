//Global scope
let a=10;

function test(){
    //function scope
    let b=20;
    console.log("a is ",a)
    if(true){
    //block scope
      let c=30;  
    }
    console.log("c is ",c)
}

test()
//console.log("b is ",b)