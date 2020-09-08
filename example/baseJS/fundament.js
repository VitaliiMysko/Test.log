// ================================
// Operator ==, ===
console.log(false == '')         //true
console.log(false == [])         //true
console.log(false == {})         //false

console.log('' == 0)             //true
console.log('' == [])            //true
console.log('' == {})            //false

console.log(0 == [])             //true
console.log(0 == {})             //false
console.log(0 == null)           //false


console.log(2 == '2')            //true
console.log(2 === '2')           //false

console.log('0' == false)        //true
console.log('0' == 0)            //true
console.log(0 == 0)              //true

console.log(undefined == null)   //true
console.log(undefined === null)  //false



// ================================
// Simple offten operator + - * 

console.log(5 + 6)              //11
console.log('5' + 6)            //56
console.log(5 + '6')            //56
console.log('5' + '6')          //56

console.log('' + 5 + 6)         //56
console.log(5 + 6 + '')         //11

console.log('5px' - 6)          //NaN
console.log('5px' + 6)          //5px6

console.log(null + 6)          //6
console.log(undefined + 6)     //NaN