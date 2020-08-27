
// // ======Object=====

// const oneOb = {
//     name: 'Vitalii',
//     age: 31,
//     job: 'programmer'
// }

// const ob = new Proxy(oneOb,{
//     get(target, prop){
//         console.log('...object "get"')
//         return target[prop]
//     },
//     set(target, prop, value){
//         console.log('...object "set"')
//         target[prop] = value
//     },
//     has(target,prop){
//         console.log('...object "has"')
//         return ['name','job'].includes(prop)
//     },
//     deleteProperty(target, prop){
//         console.log('...object "delete"')
//         delete target[prop]
//     }
// })


// // ======Function=====

// function oneFunc(a, b){
//     return a += b
// }

// function twoFunc(a, b){
//     return a **3
// }

// const myFunc = new Proxy(oneFunc, {
//     apply(target, thisArg, args){
//         console.log('... function "apply"')
//         // console.log('target ' + target)
//         // console.log('thisArg ' + thisArg)
//         // console.log('args ' + args)
//         return target.apply(thisArg, args)   
//     }
// })

// //console.log('==>' + myFunc.apply(twoFunc, [5,3]))


// // ======Class=====

// class PersonOne {
//     constructor(k, n, p){
//         this.k = k
//         this.n = n
//         this.p = p
//     }
// }

// const Person = new Proxy(PersonOne, {
//   construct(target, args){
//     console.log('... class "construct"')
//     return new target(...args)    
//   }  
// })

// //console.log(new PersonOne(1,2,3))


// //==========Example one==========

// const obBefore = (target, defaultValue = 0) => {
//     return new Proxy(target, {
//         get: (target, prop) => {
//             return (prop in target) ? target[prop] : defaultValue 
//         }
//     })
// }

// const obAfter = obBefore({
//     name: 'Vitalii',
//     age: 31
// }, 0)


// //==========Example two==========

// const obTest = {
//     name: 'Vitalii',
//     age: 31,
//     _secretField: 'completely secret information'
// }

// const obWithSecurityField = (obTarget, prefix = '_') =>{
//     return new Proxy(obTarget, {
//         has(target, prop){
//             console.log('=====has=====')
//             return prop in target && !prop.startsWith(prefix) ? true : false
//         },
//         get(target, prop, receiver){
//             console.log('=====get=====')
//             //return prop in target && !prop.startsWith(prefix) ? target[prop] : void 0
//             return prop in receiver ? target[prop] : void 0
//         },
//         ownKeys(target, prop){
//             console.log('=====ownKeys====')
//             // return Object.keys(target).filter(i => !i.startsWith(prefix))
//             return Reflect.ownKeys(target).filter(i => !i.startsWith(prefix))
//         }
//     })
// }

// const obResult = obWithSecurityField(obTest)


//==========Example three==========
//optimization method "find" in array when we have many elements

const idArr = []

const ourArr = [
    {id: '11', name: 'Petro', age: 20},
    {id: '22', name: 'Stepan', age: 30},
    {id: '33', name: 'Vasia', age: 40},
    {id: '44', name: 'Olexandr', age: 50},
    {id: '55', name: 'Mukolai', age: 60}
]



const OurArr = new Proxy(Array,{
    construct(target,args){
        console.log('====construct====')
        console.log(target)
        console.log(args)

        args[0].forEach(item => idArr[item.id] = item)
        //args[0].forEach(item => console.log(item.id))

        return new Proxy(new target(...args),{
            get:(target, prop) => {
                console.log('====get====')
                console.log(prop)
                return target[prop]
            },
            set:(target, prop, value) => {
                console.log('====set====')
                target[prop] = value
            }
        })
    }
})

const ourArrOk = new OurArr(ourArr)