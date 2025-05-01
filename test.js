// console.log("rITNESH")
// function sayhello(){
//     console.log('Hello')
// }
// sayhello()
// console.log(global)
// let hello = "Helo"
// console.log(window.hello)


// const calculator = require('./calculator')  //modulo use here 
//  calculator.addition(3,5)
//  calculator.division(5,9)
//  calculator.multiplication(8,2)
//  calculator.substraction(5,9)

const cp = require('child_process')

// cp.execSync('calc')

console.log('output ' + cp.execSync('node ./calculator.js'))