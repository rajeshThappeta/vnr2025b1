
//CREATING OBJECTS

//object literal ( create objects of different types)
let person = {
    pid: 100,
    name: 'ravi'
}



// 1000 x 10 = 10000 lines of code
// 10 +1000 =1010

//create muliple objects of same type( create design and create objects)

//CONSTRUCTOR FUNCTION or CLASS(create blueprint)
function Person(pid, name, age) {
    //object initialization logic
    this.pid = pid;
    this.name = name;
    this.age = age;
}

//add methods to prototye of constructor function
Person.prototype.getName = function () {
    return this.name;
}

//call constructor function
let personObj1 = new Person(1, 'ramu', 21)
let personObj2 = new Person(2, 'mamtha', 22)
console.log(personObj1.getName())
console.log(personObj2.getName())








//Create 5 employee objects and calculate salary of each emp
//create constructor function of EMployee
// function Employee(eno, name, city, skills, basic) {
//     this.eno = eno;
//     this.name = name;
//     this.city = city;
//     this.skills = skills;
//     this.basic = basic;
// }

// //add method to calculate salary
// Employee.prototype.getSalary = function () {

//     let hra = 0.15 * this.basic
//     let da = 0.1 * this.basic
//     let salary = this.basic + hra + da
//     return salary
// }



//class syntax
class Employee1 {
    //constructor(object initialization)
    constructor(eno, name, city, skills, basic) {
        this.eno = eno;
        this.name = name;
        this.city = city;
        this.skills = skills;
        this.basic = basic;
    }

    //methods
    getSalary() {
        let hra = 0.15 * this.basic
        let da = 0.1 * this.basic
        let salary = this.basic + hra + da
        return salary
    }

}


//Create employee objects
let emp1 = new Employee1(1, 'ravi', 'hyd', ['js', 'nodejs'], 50000)
let emp2 = new Employee1(2, 'vikas', 'chennai', ['python', 'generative AI'], 70000)

console.log(emp1.getSalary())
console.log(emp2)





