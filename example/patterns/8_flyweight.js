class VegetablesPrice{
    constructor(vegetables, price){
        this.vegetables = vegetables
        this.price = price
    }
}

class FixitPrice{
    constructor(){
        this.topPrice = []
    }

    create(vegetables, price){
        
        let currentVegetables = this.getVegetables(vegetables)


        if(currentVegetables){
            return currentVegetables
        }

        currentVegetables = new VegetablesPrice(vegetables, price)

        this.topPrice.push(currentVegetables)

        return currentVegetables
    }

    getVegetables(vegetables){
        return this.topPrice.find(i => i.vegetables === vegetables)
    }

}

const newVegetablesPrice = new FixitPrice()

const bigTomato = newVegetablesPrice.create('tomato', 25)
console.log(bigTomato)

const smallTomato = newVegetablesPrice.create('tomato', 40)
console.log(smallTomato)

const yellowCarrot = newVegetablesPrice.create('carrot', 33)
console.log(yellowCarrot)

const orangeCarrot = newVegetablesPrice.create('carrot', 41)
console.log(orangeCarrot)