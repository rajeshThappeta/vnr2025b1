
// CALLBACK FUNCTION



//function def
function test(a) {
    console.log("this is test function")
    console.log('value of a is ', a)
    //callback function called by test function
    let x = a()
    return x
}


//call 
// test(10)
// test('hello')
// test(true)
// test([1,2,3])
// test({x:100})

//test function called
let result = test(function () {
    return "callback function"
})

console.log(result)