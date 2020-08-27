class WishTextCard{

    constructor(){
        this.listWishText = []
    }

    reply(){}

    add(wishObj){
        
        this.listWishText.push(wishObj)
        return this.reply(wishObj)

    }

}

class CristmasWish extends WishTextCard{

    reply({id, castomer, wishText}){
        return `It is Cristmas wish => id: ${id}, user ${castomer} - ${wishText}` 
    }

}

class EasterWishText extends WishTextCard{

    reply({id, castomer, wishText}){
        return `It is Easter wish => id: ${id}, user ${castomer} - ${wishText}` 
    }

}

class FixitWishTest{

    register(castomer, type, wishText){

        const id = Date.now()
        // const year = new Date().getFullYear

        let wish
        
        if (type === 'Easter') {
            wish = new EasterWishText()
        } else {
            wish = new CristmasWish()
        }

        return wish.add({id, castomer, wishText})

    }

}

const greatWish = new FixitWishTest()

console.log(greatWish.register('Vitalij', 'Easter', 'Happy Easter, men'))
console.log(greatWish.register('Pedro', 'Cristmas', 'Happy Cristmas, men'))
console.log(greatWish.register('Max', 'Cristmas', 'Marry Cristmas and Happy New Year'))