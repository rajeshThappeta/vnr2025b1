let data=10;
let copyData=data;

console.log("data :",data)
console.log("copy :",copyData)

//check
data=100;
console.log("data :",data)
console.log("copy :",copyData)


let person={name:'ravi'}

//copy
//let copyPerson=person;  X
//let copyPerson=Object.assign({},person) //old
let copyPerson={...person}//spread operator


//check
person.name='bhanu'
console.log("Person :",person)
console.log("Copy :",copyPerson)