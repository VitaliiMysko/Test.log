//описуємо які методи мають бути в класі і який тип вони повертають
//саму логіку методів ми зобовязані описати в класах які будуть їх наслідувати 
abstract class AbstractClass {
    abstract mathod1(): void
    abstract mathod2(str:string): string
}

class MagikClass extends AbstractClass {
    mathod1(){
        console.log('mathod1')
    }
    mathod2(str){
        return 'sts ' + str
    }
}

const magik = new MagikClass
magik.mathod1()
console.log(magik.mathod2('Hello'))


// protected vs private
// як і protected так і private ми бачимо в похідному створеному обєкті 
// але звертатися до них і змінювати їх на пряму ми не можемо
// protected ми можеш змінювати за допомогою внутрішніх механізмів як 
// в обєкті що створений з основного класу так і з дочірних
// private ми можемо змінювати ЛИШЕ за допомогою внутршініх механізмів
// в обєкті що створений з ОСНОВОГО класу

class Test {
    readonly cardinalPoints: string[] = ['winter', 'spring', 'summer', 'autumn']    
    public anyNumber:number
    private anyNumberPrivat: number = 20
    protected anyStr: string = 'any string'
    // readonly myLevelEnglish: string

    // constructor(myLevelEnglish: string = 'A2', anyNumber){
    //     this.myLevelEnglish = myLevelEnglish
    //     this.anyNumber = anyNumber 
    // }

    // альтернативний запис вище закоментованого коду
    constructor(readonly myLevelEnglish: string = 'A2', anyNumber){
        this.anyNumber = anyNumber 
    }

    public apartcardinalPoints(){
        return this.cardinalPoints.join('~')    
    }

    public halfCardinalPoints(){
        this.cardinalPoints.length = Math.floor(this.cardinalPoints.length / 2)    
        return this.cardinalPoints 
    }

    private addCardinalPoints(sameValue: string){
        this.cardinalPoints.push(sameValue)
        return this.cardinalPoints 
    }

    public addArr(sameValue: string){
        return this.addCardinalPoints(sameValue)
    }

    public getProtectedAnyStr(){
        this.anyStr = this.anyStr + '!!!'
        return this.anyStr
    }

    public getPrivateNumber(){
        this.anyNumberPrivat = this.anyNumberPrivat + 5
        return this.anyNumberPrivat
        //return this.anyNumberPrivat + 5
    }

}

const myTest = new Test('C1', 13)
//myTest.anyNumber = 1.3
console.log(myTest)
// console.log(myTest.cardinalPoints)
// myTest.cardinalPoints.push('any')
// console.log(myTest.cardinalPoints)
// console.log(myTest.apartcardinalPoints())
// console.log(myTest.getProtectedAnyStr())
// console.log(myTest.halfCardinalPoints())
// console.log(myTest.addArr('www'))
// console.log(myTest.getPrivateNumber())
// console.log(myTest)


interface EnyObj {
    x:number,
    y:number,
    od?:string | undefined
}

class NewTest extends Test {
    public message: string = 'message'

    private anyobj: EnyObj = {
    x: 10,
    y: 5,
    od: undefined
    }

    public one(){
        return '==>' + this.anyStr + this.anyNumber
    }

    public sqeury():string | number{
        return this.anyobj.x * this.anyobj.y * this.anyNumber// + (!this.anyobj.od) ? 0 : this.anyobj.od
    }

    public getProtectedAnyStr(){
    
        super.getProtectedAnyStr()

        this.anyStr = this.anyStr + '???'
        return this.anyStr
    }

    //перемінну "anyNumberPrivat" змінювати можешмо лише в обєкті що створений на остнові класу де він оголошений
    public getPrivateNumber(){
        const res = super.getPrivateNumber()
        return res
    }
}

const newTest = new NewTest('DD', 55)
console.log(newTest)
// console.log(newTest.one())
// console.log(newTest.sqeury())
// console.log(newTest.getProtectedAnyStr())
// console.log(newTest.getPrivateNumber())
// newTest.addArr('OOOOO')
// console.log(newTest)


