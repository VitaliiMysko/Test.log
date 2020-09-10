interface MegaBoom {
    readonly id: string | number
    power: number
    info: (par: number) => boolean
    // log: function (): void,
    log: () => void
    arr?: [boolean|number, string] 
}

// ==================variant1==================

const boom: MegaBoom = {
    id: 'Unic id',
    power: 13,
    info(par){
        return (par > 0) ? true: false
    },
    log: function() {
        console.log('hello')
    }
}

// // boom.id = 33

// boom.arr = [false, 'Max']
// boom.power = 1.3
// console.log(boom)
// console.log(boom.info(1))
// boom.log()


// ==================variant2==================

// const boom2 = {id:55} as MegaBoom
// boom2.power = 77
// console.log(boom2)

// boom2.info = function (params) {
//     return Boolean(params)
// }
// console.log(boom2.info(-3))
// console.log(boom2.info(0))


// ==================variant3==================

// const boom3 = <MegaBoom>{}
// boom3.power = 22 
// console.log(boom3)



// ====================================

interface SuperBoom extends MegaBoom {
    nameInterface: string
    getNameInterface: () => string
}

const superPuper: SuperBoom ={
    id: 44,
    power: 50,
    nameInterface: 'Super',
    info: (par) => par ** 2 ? true: false,
    log: function () {
        console.log(this.info(0))
        return void 0
    },
    // getNameInterface: () => this.nameInterface
    // getNameInterface: function() {
    //     return this.nameInterface
    // }
    getNameInterface() {
        return this.nameInterface
    }
}

// console.log(superPuper)
// console.log(superPuper.info(1))
// superPuper.log()
// // console.log(superPuper.getNameInterface())
// console.log(superPuper.getNameInterface.bind(superPuper)())


// ====================================

interface IMore {
    anyNum: number
    anyStr: string
    toUpper: () => string
}

class More implements IMore{
    anyNum = 33
    anyStr = 'any'    
    toUpper(){
        return this.anyStr.toUpperCase()
    }
}

const more = new More
more.anyStr = "same"
console.log(more.toUpper()) 


// ====================================

interface Vegetables {
    [key:string]:string
}

const vegetables: Vegetables = {}
vegetables['ka ram ba'] = 'ka ram ba'
vegetables['enion'] = 'onion'
vegetables['potato'] = 'potato'
// vegetables['pea'] = 13

console.log(vegetables)