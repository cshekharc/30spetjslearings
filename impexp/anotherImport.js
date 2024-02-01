class velocity{
    constructor(courseName, tech, fees){
        this.courseName = courseName
        this.tech = tech
        this.fees = fees
    }

    courseDetailts(){
        console.log(`i have taken admossion to ${this.courseName}`)
    }

}

export {velocity}

// let std1 = new velocity('cypress', 'js', 10000)
// std1.courseDetailts()
// console.log(std1)