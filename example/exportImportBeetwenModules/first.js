
import ClassFromThird, {planets} from './third.js'

const localVar = 100

export const mainStr = 'main string'

export const mainArr = ['@', '#', '$']

planets.push('Jupiter')

export {ClassFromThird, planets} 

export const mainObj = {
    name: 'Vitalii',
    age: 31
}

export function mainFunc(a, b){
    return a + b
}

export function sqrt(num = localVar){
    return Math.sqrt(num)
}

export default{
    log(){
        return localVar
    }
    
}
