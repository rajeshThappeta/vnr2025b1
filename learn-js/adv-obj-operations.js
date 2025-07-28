
let testObj={
    a:10,
    b:20
}

//get all keys
console.log(Object.keys(testObj))

//get all values
console.log(Object.values(testObj))

//freeze the testObj(to avoid changes)
Object.freeze(testObj)

testObj.a=1234;
testObj.c=30;
delete testObj.b;
console.log(testObj)


//is testObj is empty or not?
let sampleObj={}
console.log(Object.keys(sampleObj).length)

