//What is error?
//syntax error, ref error etc......
//What happened when error is occurred?
//the program terminates abnormally
//How to handle error?
//even you cant fix them, make the remaining program excute by cathing the error



console.log("hello")
console.log("good eveng")

function test() {
    console.log("test called")
}

//let a=10;
try {
    console.log(a)
} catch (err) {
    console.error("error is ", err)
}finally{
    console.log("finally block executed")
}

let marks;
try {
    //make api call and get marks
    marks = null;
    console.log(marks.length)
   
} catch (err) {
    console.error("err in api call :", err)
}

test()
console.log("end of program")






function findReminder(a,b){
    try{
        if(b===0){
            throw new Error('second arg should not be zero')
        }
        else{
            return a%b;
        }
    }catch(err){
        console.error(err)
    }
   
}


console.log(findReminder(10,0))