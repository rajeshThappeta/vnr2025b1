class Person {
    constructor(name, age, address) {
        this.name = name
        this.address = address
        this.age = age
    }
}


//STUDENT IS A PERSON
class Student extends Person {

    constructor(name, age, address, marks, fee) {
        //call to parent constructor(Person)
        super(name, age, address)
        this.marks = marks
        this.fee = fee
    }
}


let std = new Student('ravi', 21, {}, [1, 2], 5000)
console.log(std)


class Employee extends Person {
    constructor(name, age, address, salary, designation) {
        //call to parent constructor(Person)
        super(name, age, address)
        this.salary = salary
        this.designation = designation
    }
}