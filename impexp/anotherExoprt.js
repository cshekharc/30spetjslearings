import { velocity } from "./anotherImport.js"

class itDept extends velocity{
    constructor(courseName, tech, fees, location){
        super(courseName, tech, fees)
        this.location = location
    }

    getLocation(){
        console.log(`${this.courseName}is sarted at ${this.location} new location of velocity`)
    }
}

let vel1 = new itDept('cypress', 'js', '10K', 'Katraj')
vel1.getLocation()
console.log(vel1)