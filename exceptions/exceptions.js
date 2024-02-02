try{
    let myName = "abc"
    console.log(myName.toUpperCase()) 
}catch(e){
    console.log('myName varible should always be string')
    console.log(e.name)
    console.log(e.message)
}finally{
    console.log('please check catch message')
}