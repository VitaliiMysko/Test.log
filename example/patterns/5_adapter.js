class OldCalc{
    operation(value1, value2, action){
        switch(action){
            case 'add': return value1 + value2
            case 'sub': return value1 - value2
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operation(12,4,'add'))
console.log(oldCalc.operation(12,4,'sub'))


class NewCalc{
    add(value1, value2) {
        return value1 + value2
    }
    sub(value1, value2) {
        return value1 - value2
    }
}

const newCalc = new NewCalc
console.log(newCalc.add(12,4))
console.log(newCalc.sub(12,4))


class CurrentlyCalc{
    constructor(){
        this.calc = new NewCalc
    }

    operation(value1, value2, action){
        switch(action){
            case 'add': return this.calc.add(value1, value2)
            case 'sub': return this.calc.sub(value1, value2)
            default: return NaN
        }
    }

}

const currentlyCalc = new CurrentlyCalc()
console.log(currentlyCalc.calc.add(12, 4))
console.log(currentlyCalc.operation(12, 4, 'add'))