class Parent{
    constructor(lastName, native){
        this.lastName = lastName
        this.native = native
    }

    myNative(){
        console.log('I am from' + this.native)
    }
}

export default Parent