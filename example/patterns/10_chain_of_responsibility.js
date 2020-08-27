class MySum{

    constructor(number = 0){
        this.sum = number
    }

    add(value){
        this.sum += value
        return this
    }
}

console.log(new MySum(1).add(2).add(3).sum)

const sumOk = new MySum()
console.log(sumOk.add(1).add(4).add(5).sum)