


//Complex object
let employee={
    empId:100,
    name:"ravi",
    mobile:9999999,
    basic:100000,
    skills:['recatjs','angular','nextjs','java'],
    address:{
        street:"KPHB",
        city:"hyd",
        pincode:666666
    },
    //methods
    getSalary:function(){
        //business logic to calculate salary
       let hra=0.15*this.basic;
       let da=0.10*this.basic;
       let salary=this.basic+hra+da;
       return salary
    }
}

//access
console.log(employee.skills)
console.log(employee.address.city)
console.log(employee.getSalary())





//salary= basic + HRA(15% basic) +DA(10% of basic)