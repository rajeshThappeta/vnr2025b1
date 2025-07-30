//Packing( array & object)
let arr = [1, 2, 3]
let person = {
    pid: 100,
    name: 'ravi',
    age: 21
}

//Unpacking(Destructuring)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(person.pid)
console.log(person.name)
console.log(person.age)


//Modern unpacking

//unpack array
let [a, , c] = arr;
console.log(a, c)

//unpack object
let { pid, age } = person

console.log(pid, age)




let user = {
    name: 'kiran',
    address: {
        city: 'hyd',
        pincode: 99999
    }
}


let { name, address: { city, pincode } } = user;
console.log(name)
console.log(city)
console.log(pincode)

//callable object
let test = () => {
    a = 10
}

test.b = 20

console.log(test())

// console.log(typeof(arr))
// console.log(typeof(person))
// console.log(typeof(test))



//function can be stored in a variable
let x = function () { }


//a function can send as arg(callback)
function first(x) {


}


first(function () { })

//a function can return another function
function sample() {
    return function () { }
}



// Usecase to demo a function returns another function
function createGreeter(timeOfday) {
    //return  a new function that remembers timeOfDay
    return function (name) {
        console.log("Good ", timeOfday, " ", name)
    }
}


//call
let morningGreeter = createGreeter('morning')
let afternoonGreeter = createGreeter('afternoon')
let eveningGreeter = createGreeter('evening')

morningGreeter('ravi')
afternoonGreeter('manasa')
eveningGreeter('kiran')