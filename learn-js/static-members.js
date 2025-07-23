//Student blueprint
function Student(studentName, fee) {

    this.studentName = studentName;
    this.fee = fee
}

//add collegeName to prototype
//Student.prototype.collegeName = 'VNR'
//static members
//Student.collegeName='VNR'
Student.getCollegeName=function(){
    return 'VNR'
}

// //obj1
// let studentObj1 = new Student('ravi', 50000)
// //obj2
// let studentObj2 = new Student('vasu', 100000)
// //obj3
// let studentObj3 = new Student('bhanu', 80000)

console.log(Student.getCollegeName())

// console.log(studentObj1.collegeName)
// console.log(studentObj2.collegeName)
// console.log(studentObj3.collegeName)