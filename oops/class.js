class Employee{
    constructor(name, dept, location){
        this.name = name
        this.dept = dept
        this.location = location
    }

    getEmp(){
        console.log(`${this.name} is in ${this.dept} dept from ${this.location} city`)
    }

    empgreet(){
        console.log(`hello ${this.name}`)
    }
}

let emp1 = new Employee('csc', 'IT', 'pune')
console.log(emp1)
emp1.getEmp()
emp1.empgreet()