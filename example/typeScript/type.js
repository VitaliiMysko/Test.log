var strHello = 'Hello typeScript';
strHello = "Hello";
var numInt = 13;
var numFloat = 1.3;
var numE = 10e3;
var arrayNum = [1, 1, 2, 3, 5, 8, 13];
var arrayStr = ['JS', 'TS', 'Node'];
//Tuple
var arrayStrNum = ['Hello', 13];
var arrayStrNumLong = ['Hello', 13, 1.3];
var arrayNumBool = [13, true];
//Any
var arrayAny = ["color", 13, 'red', false, "13px", undefined];
arrayAny[5] = 1.3;
var arrayWithAny = [1.3, 'spase', true];
arrayWithAny[0] = 13;
arrayWithAny[2] = null;
// =================function=================
// undefined === void
function myFucn(name, age, additionally) {
    console.log("name " + name + ", age " + age + ", additionally " + additionally);
}
function myFucn2(name, age, additionally) {
    console.log("name " + name + ", age " + age + ", additionally " + additionally);
    // return additionally  // it's right too, because TS doesn't know which type will be has variable "additionally" 
    return name;
}
// console.log(myFucn2('Vova', 13, true))
//never 
// можна використовувати, наприклад, для функції в разі отримання помилки  
// або якщо вона, функція, ніколи не виконається (зациклення)
function funcNeverErr(message) {
    throw new Error(message);
}
function funcNeverTakeOnResult() {
    //const value: boolean = true
    while (true) {
    }
}
var myBestSrt = "I love you";
var myParamStr = "ditect line";
var myParamNum = 13;
var myTripleParamBoolean = false;
var myTripleParamNumber = 13;
var myTripleParamAny = 1.3;
myTripleParamAny = true;
myTripleParamNumber = ['V', 'o', 'v', 'a'];
console.log(myTripleParamBoolean, myTripleParamNumber, myTripleParamAny);
