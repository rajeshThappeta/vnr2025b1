//ADVANCED ARRAY OPERATIONS



//Select elements(filtering)
let ar1 = [10, 30, 45, 12, 56, 34, 78]

let students = [{ id: 1, name: 'ravi', age: 21 },
{ id: 2, name: 'manasa', age: 20 },
{ id: 3, name: 'bhaskar', age: 23 }]

//select elements between 30 and 70
let result1 = ar1.filter((v) => v > 30 && v < 70)
//console.log(result1)

//get the students whose age less than 22
let listOfStudents = students.filter(stdObj => stdObj.age < 22)
//console.log(listOfStudents)


//Modify elements(mapping)
let ar2 = [10, 30, 45, 12, 56, 34, 78]

//add 2 for each element
let result = ar2.map(v => v + 2)
// console.log(result)





// Get single value result(reducing)
let ar3 = [10, 20, 50, 15]
//sum of elements
let sum = ar3.reduce((accumulator, v) => accumulator + v)
//   10         20      30
//   30         50      80
//   80         15      95
//   95
// console.log(sum)
//min value
//max value

// Search element (Finding)
let ar4 = [10, 30, 45, 12, 56, 34, 78]
//search for 40
let r = ar4.find(v => v === 12)
// console.log(r)

//Search index of an element( Find index)
let index = ar4.findIndex(v => v === 120)
//console.log(index)

//Sort original array
let ar5 = [3, 8, 12, 6]
//if a>b return 1, if a<b return -1 ,else return 0
let sortedList1 = ar5.sort((a, b) => a>b?-1:(a<b?1:0))
console.log(sortedList1)


let ar6 = [3, 13,8, 12, 6]
//if a>b return 1, if a<b return -1 ,else return 0
let sortedList2 = ar6.toSorted((a, b) => a>b?-1:(a<b?1:0))
console.log(sortedList2)
console.log(ar6)


//Sort by creating new Array

//Iterate
