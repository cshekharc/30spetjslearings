function f1() {
    console.log('this is function 1')
}

new Promise(function (resolve) {
    //function f2() {
        setTimeout(function () {
            console.log('this is function 2')
            resolve()
        }, 3000)
    //}
}).then(function () {
    console.log('this is function 3')
})



// function f3() {
//     console.log('this si function 3')
// }


f1()
// f2()
// f3()
