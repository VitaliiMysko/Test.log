function myFunc(){
    console.log('context: ', this)
}

myFunc()             //this -> window
window.myFunc()    //this -> window


const test = {
    name: 'Vilalii',
    lastName: 'Mysko',
    age: 31,
    myFunc,
    mySecondFunc(isMerried = false, trevelLiking = false){
        console.log(`is verried - ${isMerried}; trevel liking - ${trevelLiking}; 
        name - ${this.name}; age - ${this.age}`)
    }
}

const secondTest = {
    name: 'Petro',
    age: '29'
}

test.myFunc()  //this -> test

test.mySecondFunc(false,true)

//Variant 1 - BIND
const result1 = test.mySecondFunc.bind(secondTest)
//result1()
result1(true, true)

//Variant 2 - BIND
test.mySecondFunc.bind(secondTest)()
test.mySecondFunc.bind(secondTest, true, true)()

// Variant 1 the same as variant 2

test.mySecondFunc.call(secondTest, true, true)
test.mySecondFunc.apply(secondTest, [true, true])