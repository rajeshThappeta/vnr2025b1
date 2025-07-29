//Shallow copy - Create copy with top-level properties, not the nested

let student={
    rollNo:100,
    name:'ravi',
    age:21,
    marks:[90,98,97],
    address:{
        street:'KPHB',
        pincode:535353
    }
}

//create copy of student
let copyStudent={...student}

//check
// student.name='bhanu'
// student.address.street='Miyapur'

// console.log(student)
// console.log(copyStudent)


//Deep copy - Create copy of entire object including nested objects 

let deepCopy=structuredClone(student)


//check
student.name='bhanu'
student.address.street='Miyapur'

console.log(student)
console.log(deepCopy)
