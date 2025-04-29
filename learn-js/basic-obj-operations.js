//syntax of object literal
// let obj={
//     key1 : value1, //property
//     key2 : value2,
    
// }

//student object literal
let student={
    rollNo:100,
    name:"ravi",
    age:21
}

//person object
let person={
    pid:1,
    name:"kiran",
    mobile:99999999,
    isStillWorking:true,

}



//Accessing properties
console.log(person.pid)
console.log(person.name)
console.log(person['mobile'])

//Iterate (for in loop)
for(let key in person){
    console.log('key is ',key, 'and value is',person[key])
}

//adding new property
person.city='hyderabad'

//delete property
delete person.pid

//update property
person.name='raghu'

console.log(person)