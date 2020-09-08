export const planets = ['Merсury', 'Venus', 'Earth', 'Mars']

export default class {
    constructor(name = 'Petro'){
        this.name = name
    }

    static getRandomNubmer(){
        return Math.round(Math.random() * 10)
    }

    getValueKey(Key){
        return this[Key]
    }
}