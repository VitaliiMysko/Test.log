const car = {
    wheel: 4,
    color: 'blue',

    discrip(){
        console.log(`My ${this.color} car "${this.model}" has ${this.wheel} wheels`)
    }
}

const myCar = Object.create(car,{
    model:{
        value: 'BMW',
        configurable: false 
    },
    power:{
        value: 2.2,
        configurable: true 
    }

})

console.log(myCar.__proto__ === car)

console.log(myCar.discrip())
