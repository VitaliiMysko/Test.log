let strHello: string = 'Hello typeScript'
strHello = "Hello"

const numInt: number = 13
const numFloat: number = 1.3
const numE: number = 10e3

const arrayNum: number[] = [1, 1, 2, 3, 5, 8, 13]
const arrayStr: string[] = ['JS', 'TS', 'Node']

//Tuple
const arrayStrNum: [string, number] = ['Hello', 13]
const arrayStrNumLong: [string, number, number] = ['Hello', 13, 1.3]
const arrayNumBool: [number, boolean] = [13, true]

//Any
const arrayAny: any = ["color", 13, 'red', false, "13px", undefined]
arrayAny[5] = 1.3

const arrayWithAny: [number, string, any] = [1.3, 'spase', true]
arrayWithAny[0] = 13
arrayWithAny[2] = null


// =================function=================
// undefined === void

function myFucn(name:string, age: number, additionally: any) :void {
    console.log(`name ${name}, age ${age}, additionally ${additionally}`)
}

function myFucn2(name:string, age: number, additionally: any) :string {
    console.log(`name ${name}, age ${age}, additionally ${additionally}`)
    // return additionally  // it's right too, because TS doesn't know which type will be has variable "additionally" 
    return name
}

// console.log(myFucn2('Vova', 13, true))

//never 
// можна використовувати, наприклад, для функції в разі отримання помилки  
// або якщо вона, функція, ніколи не виконається (зациклення)

function funcNeverErr(message: string) :never {
    throw new Error(message);
}

function funcNeverTakeOnResult() :never {
    
    //const value: boolean = true

    while (true) {
        
    }
}

//type
type myStr = string
const myBestSrt: myStr = "I love you"

type myDoubleType = string | number
const myParamStr: myDoubleType = "ditect line"
const myParamNum: myDoubleType = 13

type myTriplеType = boolean | number | string[]
const myTripleParamBoolean: myTriplеType = false
let myTripleParamNumber: myTriplеType = 13
let myTripleParamAny: myTriplеType = 1.3
myTripleParamAny = true
myTripleParamNumber = ['V', 'o', 'v', 'a']


console.log(myTripleParamBoolean, myTripleParamNumber, myTripleParamAny)






