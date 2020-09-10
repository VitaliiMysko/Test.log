type levels = 'beginer' | 'intermedia' | 'advenser'

interface Mega {
    id: number | string
    lv: levels
    any?: {one:number, two: number} | string[]
}

const mega1: Mega = {
    id: 'Xx',
    lv: 'advenser'
}

const mega2: Mega = {
    id: '7g',
    lv: "intermedia",
    any: {
        one: 1,
        two: 2
    }
}

const mega3: Mega = {
    id: 13,
    lv: "beginer",
    any: ['Hello', 'TypeScript']    
}

// console.log(mega1)
// console.log(mega2)
// console.log(mega3)



// type  stadyFoolInfo = {
//     level: string,
//     school: string
// }

// type stadyEnoughInfo = [string]

// function stadyFunc(lv: levels): stadyEnoughInfo
// function stadyFunc(lv: levels, school: string): stadyFoolInfo

// function stadyFunc(lv: levels, school?: string){
//     if(!school){
//         return [lv]
//     }
//     return {
//         level: lv,
//         school: school
//     }
// }

// console.log(stadyFunc('advenser'))
// console.log(stadyFunc('beginer', '#23'))

class StadyFoolInfo {
    school: string = 'Best school'
    town: string = 'Ternopol'
    lv: levels
}

class StadyEnoughInfo {
    school: number = 5
    town: string = 'Lviv'
}

function stadyFunc(lv: levels, stadyInfo: StadyFoolInfo | StadyEnoughInfo): string{
    if(stadyInfo instanceof StadyFoolInfo){
        stadyInfo.lv = lv
        return JSON.stringify(stadyInfo)
    }else{
        stadyInfo.town = 'Kharkov'
        return JSON.stringify(stadyInfo)
    }
}

console.log(stadyFunc('intermedia', new StadyFoolInfo))
console.log(stadyFunc('beginer', new StadyEnoughInfo))