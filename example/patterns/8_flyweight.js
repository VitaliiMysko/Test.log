class VegetablesPrice{
    constructor(vegetables, price){
        this.vegetables = vegetables
        this.price = price
    }
}

class FixitPrice{
    constructor(){
        this.topPrice = [];
    }

    create(vegetables, price){
        
        const currentVegetablesPrice = new VegetablesPrice(vegetables, price)

        const currentPrice = this.topPrice.find(currentVegetablesPrice)
        
        if(currentPrice){
            return currentPrice
        }

        this.topPrice.push()
    }
}