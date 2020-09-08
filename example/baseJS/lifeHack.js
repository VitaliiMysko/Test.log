// Operator ??
// 0, '', false - it's normal value

console.log(null ?? 'null value')               //null value
console.log(undefined ?? 'undefined value')     //undefined value
console.log(0 ?? 'zero value')                  //0
console.log('' ?? 'empty string value')         //''
console.log(false ?? 'false value')             //false


// ================================

const fullObj = {

    bank: {
        mfo: 123456,
        code:{
            new: {
                value: 1
            },
            old: {
                value: 2
            }
        }
    }
}

const emptyObj = {}

function test(obj){
    //return obj.bank.code.new.value
    // return (obj && obj.bank && obj.bank.code && obj.bank.code.new && obj.bank.code.new.value) ? 
    // obj.bank.code.new.value : undefined
    return obj?.bank?.code?.new?.value
}

console.log(test(fullObj))
console.log(test(emptyObj))

// ================================


//...