//PARENT
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address
}

//add x to prototype of Person(inherited)
Person.prototype.x=12345;
//static(not inherited)
Person.y=112;

//STUDENT IS A PERSON
function Student(name, age, address, marks, fee) {
    //pass name,age and address to Parent (Person)
    Person.call(this, name, age, address)

    this.marks = marks
    this.fee = fee
}


//change prototype of Student to Person
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor=Student

let std1 = new Student('ravi', 21, { city: 'hyd', pincode: 424242 }, [90, 98, 98], 700000)
console.log(Student.y)













//EMPLOYEE IS A PERSON
function Employee(name, age, address, salary, designation) {
   
    Person.call(this,name, age, address)
    this.salary = salary
    this.designation = designation
}

//chage prototype of EMployee to Person
Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Employee









