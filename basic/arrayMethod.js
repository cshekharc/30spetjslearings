// let names = ["shekhar", "vijay", "velocity", "katraj"]
// // console.log(typeof names)

// // for (let i = 0; i < names.length; i++) {
// //     console.log(names[i])
// // }
// // names.forEach(function(abc){
// //     console.log(abc)
// // })

// // for(let id in names){
// //     console.log(names[id])
// // }
// map
// let capNames = names.map(function(name){
//     return name.toUpperCase()
// })

// console.log(capNames)
// console.log(names)
// filter
// let num = [4, 20, 45, 30, 55, 81]

// let even = num.filter(function(n){
//     return n % 2 === 0
// })
// console.log(even)

// reduce 

// let numbers = [2,5, 9, 10, 50]

// let sum = numbers.reduce(function(add, number){
//     return add + number
// },0)
// console.log("Result is :"+sum)

// callback function
function abc(num, newfun) {
    let res = num * 10
    newfun(res)
}

function result(res){
    console.log(res+ ' :is result')
}

abc(10, result) 
