
console.log('Start')

const typeJS1 = ['array', 'object']

typeJS1.push('symbol')

console.log('One')

const exam1 = new Promise((resolve, reject) => {
    
    console.log(1)

    resolve(2)

})
.then((val1) => {
    console.log(val1)
})
.then(() => {
    console.log(3)
})

const exam2 = new Promise((resolve, reject) => {
    
    console.log(11)

    resolve(true)

})
.then((val1) => {

    return new Promise((r) => {
        console.log(val1)
        r()
    })

})
.then(() => {
    console.log(13)
})


const p = new Promise((resolve, reject) =>{

    const typeJS2 = ['string', 'number']

    const typeJS3 = typeJS2.concat(typeJS1)

    for(let value of typeJS3){
        console.log('for of - ' + value)
    }

    setTimeout(() => {
        console.log('Time doing - ' + typeJS2.length + 'sec.')
        resolve(typeJS3) 
    }, typeJS2.length * 1000);

})

console.log('two')

p.then((data)=>{
    
    return new Promise((res,rej)=>{

        setTimeout(() => {
            console.log('Time doing - ' + data.length + 'sec.')
            res(data.length) 
        }, data.length * 1000);
    
    })
    
})
.catch(err => console.error("1_" + err))
.then(num => console.log(num, ++num, ++num))
//.then(() => {throw 'my error'})
.then(()=>console.log('last line'))
.catch(err=>console.log("2_" + err))
.finally(()=>console.log('finally'))

console.log('three')

typeJS1.forEach(value => console.log(value + '___ok)'))

console.log('four')

let i = 1

while (i <= 1000) {

    if(!(i % 100)){
        console.log('==' + i + '==')
    }
    
    i++
}