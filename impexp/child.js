import Parent from "./parent.js";
class Child extends Parent {
    constructor(lastName, native, name){
        super(lastName, native)
        this.name = name
    }

    myName(){
        console.log('My name is ' +this.name + this.lastName +'from' + this.native) 
    }
}

export default Child