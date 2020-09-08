// function* generator(num) {
//     for (let i = 0; i < num; i++) {
//         yield i
//     }
// }

// for(let val of generator(4)){
//     console.log(val)
// }



const ob = {
    [Symbol.iterator](n = 5){
        //gen(n = 5){
        let i = 0
        
        return {
            next() {
                if(i < n){
                    return {value: ++i, done: false}
                }
                return {value: void 0, done: true}
            }
        }

    }
}

for(let val of ob){
    console.log(val)
}
