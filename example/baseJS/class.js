
// class Component{
//     constructor(selector){
//         this.$div = document.querySelector(selector)
//     }

//     show(){
//         this.$div.style.display = 'block'
//     }

//     hide(){
//         this.$div.style.display = 'none'
//     }
// }

// class Box extends Component{
//     constructor(data){
//         super(data.selector)
//         this.$div.style.width = this.$div.style.height = data.size + 'px'
//         this.$div.style.background = data.color
//     }
// }

// class Circle extends Box{
//     constructor(data){
//         super(data)
//         this.$div.style.borderRadius = '50%'
//     }  
// } 


// const box1 = new Box({
//     selector: '#div1',
//     size: 50,
//     color: 'blue'
// })

// const box2 = new Box({
//     selector: '#div2',
//     size: 50,
//     color: 'yellow'
// })

// const circle = new Circle({
//     selector: '#div3',
//     size: 50,
//     color: 'green'
// })

// class People{

//     static nameClass = 'PEOPLE'

//     constructor(characteristic){
//         this.smart = characteristic.smart,
//         this.sing = characteristic.sing,
//         this.wearingClothes = characteristic.wearingClothes,
//         this.reading = characteristic.reading,
//         this.writing = characteristic.writing
//     }

//     currentPeriod(){
//         console.log(People.nameClass + ' last 100 yers')
//     }
// }

// class HomoSapiens extends People{

//     static nameClass = 'HOMO SAPIENS'

//     constructor(characteristic){
//         super(characteristic)
//         this.longLife = characteristic.longLife
//     }

//     currentPeriod(){
//         //super()
//         console.log(HomoSapiens.nameClass + ' during 10000 - 2000 yers ago')
//     }
// }

// class HomoErectys extends HomoSapiens{
    
//     static nameClass = 'HOMO ERECTYS'

//     constructor(characteristic){
//         super(characteristic)
//         this.hasWool = characteristic.hasWool
//     }

//     currentPeriod(){
//         //super()
//         console.log(HomoErectys.nameClass + ' during 50000 - 15000 yers ago')
//     }
// }

// const people = new People({
//     smart: true,
//     sing: true,
//     wearingClothes: true,
//     reading: true,
//     writing: true 
// })

// console.log(people)
// people.currentPeriod()

// const homoSapiens = new HomoSapiens({
//     smart: true,
//     sing: true,
//     wearingClothes: true,
//     reading: false,
//     writing: false,
//     longLife: 45 
// })

// console.log(homoSapiens)
// homoSapiens.currentPeriod()

// const homoErectys = new HomoErectys({
//     smart: false,
//     sing: false,
//     wearingClothes: true,
//     reading: false,
//     writing: false,
//     longLife: 40,
//     hasWool: true 
// })

// console.log(homoErectys)
// homoErectys.currentPeriod()



//================NEW 2020================
// #privalFild
// static #staticPrivatFild
// fild = 'any value'

class Person {
    name = 'dafoult name'
    static #budget = 13000
    static stat = 'value static param'
    static #statprivat = 'value static privat param'

    constructor(){
        //this.name = name
        //this.cours = cours
    }

    static budgetDolars () {
        Person.#budget = Person.#budget / 26
        return Person.#budget
    }
}

const pers = new Person('Volodumur')
console.log(pers)
//pers.#budget = 26000
//console.log(Person.budgetDolars())
console.log(Person.budgetDolars())


console.log(typeof 10n)