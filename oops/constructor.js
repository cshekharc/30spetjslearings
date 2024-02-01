// special type of funcion

function Employee(name, dept, age){
    this.name = name
    this.dept = dept
    this.age = age

    this.newEmp = function(){
        console.log('This is for new employee')
    }
}

let emp1 = new Employee('shekhar', 'admin', 34)
let emp2 = new Employee('velocity', 'IT', 30)
let emp3 = new Employee('CSC', 'IT', 20)

// emp1.newEmp()
// console.log(emp1)
// console.log('------')
// emp2.newEmp()
// console.log(emp2)

function Circle(radius){
    this.radius = radius
    this.getCircle = function(){
        console.log(`circle is of radius: ${this.radius}`
        )
    }
}

let circle1 = new Circle(10) // object
console.log(circle1) // log
circle1.getCircle() // function call


