// import def, {mainStr, planets, ClassFromThird, mainObj as obj} from './first.js';

// console.log(mainStr)
// console.log(planets)

// const testObj = new ClassFromThird('Anton')
// // console.log(testObj)
// console.log(testObj.getValueKey('name'))
// console.log(def.log())

// obj.isHelthy = false
// console.log(obj)


import * as exportData from './first.js'

console.log(exportData.mainStr)
console.log(exportData.planets)

const testObj = new exportData.ClassFromThird('Anton')
// console.log(testObj)
console.log(testObj.getValueKey('name'))
// console.log(testObj.getRandomNubmer())
console.log(exportData.ClassFromThird.getRandomNubmer())

console.log(exportData.default.log())

exportData.mainObj.isHelthy = false
console.log(exportData.mainObj)
