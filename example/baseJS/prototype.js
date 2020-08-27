// //Variant 1. We use 'new Object' for create perem 'test'
// const test = new Object({
//     name: 'Vilalii',
//     lastName: 'Mysko',
//     age: 31,
//     myFunc(){
//         console.log('I am method inside object "test"')
//     }
// })
 
//Variant 2. We use contraction method for create perem 'test'
const test = {
    name: 'Vilalii',
    lastName: 'Mysko',
    age: 31,
    myFunc(){
        console.log('I am method inside object "test"')
    }
}

//Attention! Variant 1 the same as variant 2.

test.myFunc()  //oll good

try{
    test.mySecondFunc() //we've error
}catch{

}

// ===============================================

//PROTOTIPE

// Object.prototype.mySecondFunc = function(){
//     console.log('I am method inside global object')
// }

Object.prototype.mySecondFunc = () => console.log('I am method inside global object')

test.mySecondFunc() //we haven't error, oll good

console.log(test.__proto__ === Object.prototype)       //true


const secondTest = Object.create(test)
secondTest.name = 'Petro'

secondTest.myFunc()    //oll good

secondTest.mySecondFunc()   //oll good

console.log(secondTest.__proto__ === test)       //true
console.log(secondTest.__proto__.__proto__ === test.__proto__)       //true
console.log(secondTest.__proto__.__proto__ === Object.prototype)       //true

console.log(secondTest.name)            //'Petro'
console.log(secondTest.__proto__.name)  //'Vilalii'

// ===============================================

const str = 'I want learn JavaScript'

console.log(str.toUpperCase())

str.mySecondFunc()      //true