//Array

// let marks = [90, 12, 56, 34, 78];
// //length
// console.log("Length of array is ", marks.length)

// //Accessing elements
// console.log(marks[0])
// console.log(marks[4])


// //Iterate(traversal)
// //basic for loop
// console.log("For loop")
// for (let index = 0; index < marks.length; index++) {
//     console.log(marks[index])
// }

// //while loop
// console.log("While loop")
// let index = 0;
// while (index < marks.length) {
//     console.log(marks[index]);
//     index++;
// }

// //for-of loop
// console.log("For of loop")
// for (let v of marks) {
//     console.log(v)
// }

let arr=[10,20,30]

//Insert
    //start
    arr.unshift(1,2,3)
    console.log(arr)

    //end
    arr.push(11,12,13)
    console.log(arr)

    //in-between (index based)
    arr.splice(4,0,123,234)
    console.log(arr)

//Delete
    //start
    arr.shift()
    console.log(arr)

    //end
    arr.pop()
    console.log(arr)

    //in-between(index based)
    arr.splice(3,2)
    console.log(arr)

//Update
    arr.splice(2,1,9999)
    console.log(arr)


