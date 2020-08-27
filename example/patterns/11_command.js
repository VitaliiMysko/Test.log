class MyNumberActions{
    constructor(value){
        this.num = value
    }

    square(){
         return this.num ** 2
    }

    cube(){
        return this.num ** 3
    }

}

class Command{

    constructor(target){
        this.target = target
        this.commandArr = []
    }

    execute(command){
        this.commandArr.push(command)
        return this.target[command]()
    }

}

const test = new Command(new MyNumberActions(3))

console.log(test.execute('square'))
console.log(test.execute('cube'))

console.log(test.commandArr)
