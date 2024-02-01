let prom = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let err = false
        if(!err){
            resolve({userName: "Myself", password: "password"})
        }else{
            reject("error something went wrong")
        }
    }, 1000)
})

let user = prom.then(function(ar1){
    console.log(ar1)
    // return user.userName
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Promise is completed")
})

//console.log(prom)